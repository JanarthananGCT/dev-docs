import React, { useEffect } from "react";
import App from '@site/src/components/App/index';
import Cookies from 'js-cookie';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode, useThemeConfig} from '@docusaurus/theme-common';
import { ThemeProvider } from '@sparrowengg/twigs-react';
import useAlgoliaFacetFilter from "../hooks/useAlgoliaFacetFilter";
export default function Root({ children }) {
  useAlgoliaFacetFilter()
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const theme = Cookies.get('theme');
  useEffect(() => {
    import('../utils/prismLight.mjs').then(module => {
      const lightTheme = module.default;
      import('../utils/prismDark.mjs').then(async module => {
        const darkTheme = module.default;
        if (theme === 'dark') {
          themeConfig.prism.darkTheme = darkTheme;
        } else {
          themeConfig.prism.theme = lightTheme;
        }
      });
    });
  }, [theme]);
  return (
    <>
      <App children={children} />
    </>
  )
}
