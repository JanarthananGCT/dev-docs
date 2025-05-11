import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import { Button } from '@sparrowengg/twigs-react';
import Cookies from "js-cookie";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
       {/* <Button
            size="md"
            css={{
              marginInlineStart: '12px',
              marginBlockStart: "12px"
            }}
             className="navbar-button"
            onClick={() => {
              window.open(
                Cookies.get("redirection_url")
                  ? Cookies.get("redirection_url")
                  : "https://app.surveysparrow.com/signup?source=dev_site",
                "_blank"
              );
            }}
            color="primary"
            variant={"outline"}
          >
            {Cookies.get("redirection_url") ? "Manage Apps" : "Login / Signup"}
          </Button> */}


    </ul>
  );
}
