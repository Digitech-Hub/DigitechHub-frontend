import ThemeContext from "@/contexts/ThemeContext";
import type { ThemeContextType } from "@/types/theme.type";
import { useContext } from "react";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
