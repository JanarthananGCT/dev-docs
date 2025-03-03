import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// import UserIcon from './icons/user-icon';
import '../../css/signup-modal.css'

function generateRandomNumber() {
  const crypto = window.crypto;
  const randomBytes = crypto.getRandomValues(new Uint8Array(1));
  const randomNumber = randomBytes[0] / 255;
  return randomNumber;
}

const SignupModal = ({
  setShowModal,
  showModal,
}) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [countryValue, setCountryValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useHistory();
  
  // Parse app data centers from environment
  const appDCs = JSON.parse(process.env.REACT_APP_DCS ?? '[]');
  
  // Constants that were imported in the original file
  const signupBackgroundUrl = '/images/signup-background.png'; // Replace with actual path
  const Errors = {
    email_required: 'Email is required',
    email_exists: 'This email already exists',
    account_exists: 'An account with this email already exists'
  };
  const error_types = {
    email: {
      type: 'email_exists',
      name: 'email',
      account: 'account_exists'
    },
    account: {
      name: 'account'
    }
  };
  const privacy_policy = {
    sparrow: {
      privacy: 'https://surveysparrow.com/privacy-policy',
      terms: 'https://surveysparrow.com/terms-of-service'
    },
    google: {
      privacy: 'https://policies.google.com/privacy',
      terms: 'https://policies.google.com/terms'
    }
  };
  
  const signupData = {
    user: {
      email: '',
      phone: '',
      name: ''
    },
    hubspotUtk: '',
    ssUserId: '',
    ssSignupId: '',
    recaptchaToken: ''
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCountryMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  useEffect(() => {
    if (!countryValue && appDCs?.length > 0) {
      setCountryValue(appDCs.find(country => country.value === 'US'));
    }
    
    // Add escape key handler
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showModal, setShowModal]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const setError = (name, error) => {
    setErrors({
      ...errors,
      [name]: error.message
    });
  };

  const sendSignupDataToProduct = async (data) => {
    try {
      const serverResponse = await axios.post(
        `${countryValue?.url}/api/internal/signup?DC=${countryValue?.value}`,
        data,
        {
          timeout: 0,
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        }
      );
      navigate(serverResponse?.data?.clientRedirectUrl);
    } catch (error) {
      const e = JSON.parse(JSON.stringify(error));
      if (e.status === 409 && e.data?.error === error_types.email.type) {
        setError(error_types.email.name, {
          message: Errors[error_types.email.type],
        });
      } else if (e.status === 409 && e.data?.error === error_types.email.account) {
        setError(error_types.account.name, {
          message: Errors[error_types.email.account],
        });
      }
    }
  };

  const checkDropdownPosition = () => {
    // Check if dropdown might go off screen to the right
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const menuElement = dropdownRef.current.querySelector('.dropdown-menu');
      
      if (menuElement) {
        if (rect.left + menuElement.offsetWidth > window.innerWidth) {
          menuElement.classList.add('align-right');
        } else {
          menuElement.classList.remove('align-right');
        }
      }
    }
  };

  const toggleCountryMenu = () => {
    setCountryMenuOpen(!countryMenuOpen);
    // Use setTimeout to ensure DOM is updated before checking position
    setTimeout(checkDropdownPosition, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      if (!formData.email) {
        setError('email', {
          message: Errors['email_required'],
        });
        setIsSubmitting(false);
        return;
      }
      
      signupData.user.email = formData.email;
      signupData.user.phone = formData.phone;
      signupData.user.name = formData.email.split('@')[0];
      
      const hubspotUtk = Cookies.get('hubspotutk');
      if (hubspotUtk) {
        signupData.hubspotUtk = hubspotUtk;
      }
      
      const ssUserId = Cookies.get('ssUserId');
      signupData.ssUserId = ssUserId || '';
      
      const signupIdGA = `${generateRandomNumber()
        .toString(36)
        .slice(1, 22)}.${Math.floor(new Date().getTime())}`;
      if (ssUserId) {
        signupData.ssSignupId = signupIdGA;
      }
      
      await new Promise((resolve) => {
        window.grecaptcha.ready(() => {
          resolve();
        });
      });
      
      const token = await window.grecaptcha.execute(
        `${process.env.REACT_RECAPTCHA_KEY}`,
        {
          action: 'submit',
        }
      );
      
      signupData.recaptchaToken = token;
      await sendSignupDataToProduct(signupData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle background click to close modal
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-header">
          <div className="header-background">
            <img src={signupBackgroundUrl} alt="Header background" />
          </div>
          <h2 className="header-title" id="modal-title">Build solutions!</h2>
          <button 
            className="close-button"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <p className="modal-subtitle">
            Bring your vision to action with our low-code platform
          </p>
          
          <form id="surveysparrow-signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-control">
              <label className="form-label" htmlFor="email">
                Work Email <span className="required">*</span>
              </label>
              <input
                id="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="Your Work Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p className="error-message" id="email-error" role="alert">{errors.email}</p>
              )}
            </div>

            <div className="form-control">
              <label className="form-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                className="form-input"
                placeholder="Enter Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p className="error-message" id="phone-error" role="alert">{errors.phone}</p>
              )}
            </div>

            <div className="form-control">
              <div className="country-selector">
                <p className="data-location-text">
                  Your data will be stored in
                </p>
                <div className="dropdown-container" ref={dropdownRef}>
                  <button 
                    type="button"
                    className="dropdown-button"
                    onClick={toggleCountryMenu}
                    aria-haspopup="listbox"
                    aria-expanded={countryMenuOpen}
                  >
                    {countryValue?.name}
                    <span className="dropdown-icon">▼</span>
                  </button>
                  
                  {countryMenuOpen && (
                    <ul 
                      className="dropdown-menu" 
                      role="listbox"
                      aria-activedescendant={`country-${countryValue?.id}`}
                    >
                      {appDCs?.map((country) => (
                        <li 
                          key={country?.id}
                          id={`country-${country?.id}`}
                          className="dropdown-item"
                          role="option"
                          aria-selected={country?.id === countryValue?.id}
                          onClick={() => {
                            setCountryValue(country);
                            setCountryMenuOpen(false);
                          }}
                        >
                          {country?.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
          
          <p className="terms-text">
            By signing up, I agree to SurveySparrow's{' '}
            <a
              className="terms-link"
              href={privacy_policy.sparrow.privacy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              className="terms-link"
              href={privacy_policy.sparrow.terms}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service.
            </a>
          </p>
        </div>

        <div className="modal-footer">
          <div className="footer-content">
            <div className="login-prompt">
              {/* <UserIcon size={20} color="#4E596C" /> */}
              <span className="login-text">
                Already have an account?
              </span>
              <a
                className="login-link"
                target="_blank"
                href={process.env.REACT_LOGIN_URL}
                rel="noopener noreferrer"
              >
                Login
              </a>
            </div>
          </div>
          <p className="recaptcha-notice">
            Protected by reCAPTCHA and Google{' '}
            <a
              className="recaptcha-link"
              href={privacy_policy.google.privacy}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              className="recaptcha-link"
              href={privacy_policy.google.terms}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;