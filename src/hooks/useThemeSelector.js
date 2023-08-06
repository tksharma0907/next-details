"use client";
import { useEffect } from "react";

const useThemeSelector = () => {
  const themePreviewVariables = {
    "--primary": "#6527be",
    "--light": "#fff",
    "--dark": "#91C8E4",
    margin: "0px",
  };

  const cssVariablesPreview = () => {
    let cssVariables = "";
    for (let themeVariable in themePreviewVariables) {
      cssVariables +=
        themeVariable + ":" + themePreviewVariables[themeVariable] + ";";
    }
    return cssVariables;
  };

  useEffect(() => {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", cssVariablesPreview());
  }, [cssVariablesPreview]);
};

export default useThemeSelector;
