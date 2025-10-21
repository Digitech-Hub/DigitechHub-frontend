import { createContext } from 'react';

import type { ThemeContextType } from '@/types/theme.type';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
