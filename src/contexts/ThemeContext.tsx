import { createContext, useContext, useEffect, useState } from 'react';
import type { Theme, ThemeContextType, ThemeProviderProps } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
    children,
    defaultTheme = 'light'
}: ThemeProviderProps) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        // localStorage에서 테마 설정 불러오기
        const savedTheme = localStorage.getItem('digitech-theme') as Theme;
        return savedTheme || defaultTheme;
    });

    useEffect(() => {
        // 테마 변경 시 localStorage에 저장
        localStorage.setItem('digitech-theme', theme);

        // HTML 요소에 테마 클래스 적용
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setThemeState(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
    };

    const value: ThemeContextType = {
        theme,
        toggleTheme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
