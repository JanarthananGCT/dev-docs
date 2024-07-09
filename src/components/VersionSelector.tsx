import React, { useEffect, useState } from "react";
import {
  Select,
  Box,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  Button,
} from "@sparrowengg/twigs-react";
import VersionJson from "../../docs/rest-apis/versions.json";
import { useHistory, useLocation } from "react-router-dom";
import useAlgoliaFacetFilter from "../hooks/useAlgoliaFacetFilter";
import { useColorMode } from "@docusaurus/theme-common";
import { ChevronDownFillIcon } from "@sparrowengg/twigs-react-icons";

interface Version {
  version: string;
  baseUrl: string;
  label: string;
}

interface Option {
  value: string;
  label: string;
}

const VersionSelector: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const isClient = typeof window !== "undefined";
  const options: Version[] = VersionJson as Version[];
  const { colorMode, setColorMode } = useColorMode();

  const [selectedOption, setSelectedOption] = useState<Version>(
    getVersionObjectFromLocalStorage()
  );

  // Ensure useAlgoliaFacetFilter is called correctly
  useAlgoliaFacetFilter();

  const handleSelectChange = (option: Version) => {
    setSelectedOption(option);
    localStorage.setItem("selectedVersion", JSON.stringify(option));
    history.push(option.baseUrl);
  };
  useEffect(() => {
    setSelectedOption(getVersionObjectFromLocalStorage());
    localStorage.setItem(
      "selectedVersion",
      JSON.stringify(getVersionObjectFromLocalStorage())
    );
  }, [location.pathname]);

  // Check if the current URL contains /rest-apis/v3
  const showDropdown = location.pathname.includes("/rest-apis");
  function getVersionObjectFromLocalStorage() {
    // Check if localStorage is defined (client-side context)
    if (location.pathname.includes("/v3")) {
      return {
        version: "v3",
        label: "Version 3",
        baseUrl: "/rest-apis/v3",
      };
    } else if (location.pathname.includes("/v2")) {
      return {
        version: "v2",
        label: "Version 2",
        baseUrl: "/rest-apis/v2",
      };
    } else if (location.pathname.includes("/v1")) {
      return {
        version: "v1",
        label: "Version 1",
        baseUrl: "/rest-apis/v1",
      };
    } else if (
      location.pathname.includes("rest-apis/Introduction") ||
      location.pathname.includes("rest-apis/OAuth")
    ) {
      return JSON.parse(localStorage.getItem("selectedVersion"));
    } else {
      return {
        version: "v3",
        label: "Version 3",
        baseUrl: "/rest-apis/v3",
      };
    }
  }

  return (
    <Box
      css={{
        padding: "0 $6",
      }}
    >
      {showDropdown && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="md"
              color={colorMode === "dark" ? "light" : "default"}
              variant="outline"
              rightIcon={<ChevronDownFillIcon size={20} />}
            >
              {selectedOption?.label || "Select API Version"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={4}
            css={{
              minWidth: 120,
              zIndex: "10000 !important",
              background: colorMode === "dark" ? "rgba(9,10,17,0.8)" : "white",
              border: "none !important",
            }}
          >
            {options.map(
              (option, id) =>
                option.version !== selectedOption.version && (
                  <DropdownMenuItem
                    css={{
                      cursor: "pointer",
                      "&:hover": { color: "$primary500" },
                      fontSize: "16px !important",
                      color:
                        colorMode === "dark" ? "white" : "rgba(9,10,17,0.8)",
                    }}
                    onClick={() => handleSelectChange(option)}
                    key={id}
                  >
                    {option.label}
                  </DropdownMenuItem>
                )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </Box>
  );
};

export default VersionSelector;
