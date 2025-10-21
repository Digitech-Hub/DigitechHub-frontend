import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';

import RootProvider from './providers/';
import router from './routes.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RootProvider>
            <RouterProvider router={router} />
        </RootProvider>
    </StrictMode>,
);
