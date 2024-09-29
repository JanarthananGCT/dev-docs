import React from 'react';
import { useEffect } from 'react';

const IMAGE_URL = 'https://static.surveysparrow.com/application/marketplace';

const documentationOptions = [
  {
    id: 1,
    name: 'AppNest',
    icon: `${IMAGE_URL}/app/store-new.svg`,
    path: '/appnest/docs',
  },
  {
    id: 2,
    name: 'RestAPI',
    icon: `${IMAGE_URL}/app/api-new.svg`,
    path: '/rest-apis',
  },
  {
    id: 3,
    name: 'Mobile SDK',
    icon: `${IMAGE_URL}/app/sdk-new.svg`,
    arrowIcon: true,
    path: '/sdk',
  },
  {
    id: 4,
    name: 'Embed',
    icon: `${IMAGE_URL}/app/embed-new.svg`,
    path: '/embed',
  },
];

const documentCards = [
  {
    id: 1,
    heading: 'AppNest',
    title: 'Bridge the gaps by building powerful apps',
    description:
      'Unleash boundless innovation in our marketplace and cultivate a thriving ecosystem. Forge your own apps with the SurveySparrow SDK to elevate the customer experience, propelling your business to unprecedented heights.',
    image: 'https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Home/img-1.jpeg',
    path: '/appnest/docs',
    btnText: 'Get Started'
  },
  {
    id: 2,
    heading: 'rest api',
    title: 'Set up quick and secure integrations',
    description:
      'Seamlessly integrate Survey Sparrow into your existing workflow. Our RESTful API lets you unlock the full potential of surveys with ease and flexibility. Build, automate, and innovate with data-driven insights like never before.',
    image: 'https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Home/img-2.jpeg',
    path: '/rest-apis',
    btnText: 'Read Documentation'
  },
  {
    id: 3,
    heading: 'mobile sdk',
    title: 'Collect data on the fly with Flutter SDK',
    description:
      "Reduce customer friction by gathering feedback through your mobile app. Embrace SurveySparrow's Flutter SDK to deploy feedback surveys in just a few lines of code. Boost response rates by capturing user insights right after different app interactions.",
    image: 'https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Home/img-3.jpeg',
    path: '/sdk',
    arrowIcon: true,
    btnText: 'Get Started'
  },
  {
    id: 4,
    heading: 'web embed',
    title: 'Gather intuitive feedback from website widgets',
    description:
      'Infuse your website with enchanting dynamic Web Embed of surveys and engagement forms. Unearth invaluable insights with seamless data collection. Curate interactions that leave customers delighted and engaged, redefining online experiences.',
    image: 'https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Home/img-4.jpeg',
    path: '/embed',
    btnText: 'Learn More'
  },
];


const Main = () => {
  return (
    <div className="docs--main-container">
      <div className="docs--hero-section">
        <video autoPlay muted loop id="videoPlayer">
          <source src="https://ss-staging-public.s3.amazonaws.com/ss-public-api-docs/Home/background.mp4" />
        </video>
        <div className="docs--hero-content">
          <h1 className="docs--hero-title">Build experiences that match your imagination.</h1>
          <p className="docs--hero-subtitle">Unleash boundless potential with SurveySparrow's developer tools.</p>
          <div className="docs--documentation-options">
            {documentationOptions.map((option) => (
              <a href={option.path} target={option.arrowIcon ? '_blank' : '_self'} key={option.id} className="docs--option-link">
                <div className="docs--option-content">
                  <img src={option.icon} alt={option.name} className="docs--option-icon" />
                  <span className="docs--option-name">{option.name}</span>
                </div>
                {option.arrowIcon ? (
                  <span className="docs--header-arrow-icon">&#8594;</span>
                ) : (
                  <span className="docs--header-chevron-icon">&#8250;</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="docs--document-cards">
        {documentCards.map((card, index) => (
          <div className={`docs--card ${index % 2 === 1 ? 'docs--reverse' : ''}`} key={card.id}>
            <div className="docs--card-content">
              <h2 className="docs--card-heading">{card.heading}</h2>
              <h3 className="docs--card-title">{card.title}</h3>
              <p className="docs--card-description">{card.description}</p>
              <a href={card.path} target={card.arrowIcon ? '_blank' : '_self'} className="docs--card-button">
                {card.btnText}
                {card.arrowIcon ? (
                  <span className="docs--external-link-icon">&#8599;</span>
                ) : (
                  <span className="docs--arrow-icon">&#8594;</span>
                )}
              </a>
            </div>
            <div className="docs--card-image" style={{backgroundImage: `url(${card.image})`}}>
              <a href={card.path} target={card.arrowIcon ? '_blank' : '_self'} className="docs--mobile-card-button">
                {card.btnText}
                {card.arrowIcon ? (
                  <span className="docs--external-link-icon">&#8599;</span>
                ) : (
                  <span className="docs--arrow-icon">&#8594;</span>
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Main;
