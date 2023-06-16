import React, { createContext, useEffect } from "react";

type Theme = "default" | "bubblegum" | "gunmetal";

type ThemeContextValue = Theme;

const ThemeContext = createContext<ThemeContextValue>("default");

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-theme", theme);

    return () => {
      html.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
