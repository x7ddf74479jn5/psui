import React, { createContext, useEffect } from "react";

type Theme = "default" | "bubblegum" | "gunmetal";

type ThemeContextValue = Theme;

const ThemeContext = createContext<ThemeContextValue>("default");

export const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Capitalize<Theme>;
}) => {
  const newTheme = theme.toLowerCase() as Theme;

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-theme", newTheme);

    return () => {
      html.removeAttribute("data-theme");
    };
  }, [newTheme]);

  return (
    <ThemeContext.Provider value={newTheme}>{children}</ThemeContext.Provider>
  );
};
