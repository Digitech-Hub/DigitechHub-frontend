import React from 'react';

import ThemeProvider from './theme-provider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootProvider;
