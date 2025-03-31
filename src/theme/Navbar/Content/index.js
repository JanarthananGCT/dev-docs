import React from 'react';
import { useThemeConfig, ErrorCauseBoundary } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import VersionSelector from '@site/src/components/VersionSelector';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';
import { Button } from '@sparrowengg/twigs-react';
import { useColorMode } from "@docusaurus/theme-common";
import Cookies from "js-cookie";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error },
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  const { colorMode, setColorMode } = useColorMode();
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  console.log(searchBarItem)
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          {/* <VersionSelector /> */}
     
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
               <div className="navbar__divider" style={{
            height: "20px",
            width: "1px",
            background: "#757575"
          }} ></div>
     
          <NavbarItems items={rightItems} />
          {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
     <div>
     <Button
            size="md"
            css={{
              margin: "0 10px",
              marginRight: "16px",
            }}
            onClick={() => {
              window.open(
                Cookies.get("redirection_url")
                  ? Cookies.get("redirection_url")
                  : "https://app.surveysparrow.com/signup?source=dev_site",
                "_blank"
              );
            }}
            color="primary"
            className="navbar-button desktop-button"
          >
            {Cookies.get("redirection_url") ? "Manage Apps" : "Login"}
          </Button>
     </div>
        </>
      }
    />
  );
}
