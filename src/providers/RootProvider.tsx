import React from 'react';

import ThemeProvider from './ThemeProvider';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default RootProvider;
