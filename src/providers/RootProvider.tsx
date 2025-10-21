import React from 'react';

import QueryProvider from './QueryProvider';
import ThemeProvider from './ThemeProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
    );
};

export default RootProvider;
