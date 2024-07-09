import React,{useEffect} from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import styles from './styles.module.css';
import Cookies from 'js-cookie';
export default function NavbarColorModeToggle({ className }) {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  useEffect(() => {
    Cookies.set('theme', colorMode)
  }, [colorMode])
  if (disabled) {
    return null;
  }
  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
      }
      value={colorMode}
      onChange={setColorMode}
    />
  );
}
