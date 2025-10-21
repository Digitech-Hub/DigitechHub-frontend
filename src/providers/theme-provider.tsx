import ThemeContext from "@/contexts/ThemeContext";
import type {
  Theme,
  ThemeContextType,
  ThemeProviderProps,
} from "@/types/theme.type";
import { useEffect, useState } from "react";

const ThemeProvider = ({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // localStorage에서 테마 설정 불러오기
    const savedTheme = localStorage.getItem("digitech-theme") as Theme;
    return savedTheme || defaultTheme;
  });

  useEffect(() => {
    // 테마 변경 시 localStorage에 저장
    localStorage.setItem("digitech-theme", theme);

    // HTML 요소에 테마 클래스 적용
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // 테마 상태 계산
  const isDark = theme === "dark";
  const isLight = theme === "light";

  const value: ThemeContextType = {
    theme,
    isDark,
    isLight,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
