import { createBrowserRouter } from 'react-router';

import { HomePage } from '@/pages';

import { AuthLayout } from './components/layout';

const router = createBrowserRouter([
    {
        Component: AuthLayout,
        children: [
            {
                path: 'home',
                Component: HomePage,
            },
        ],
    },
]);

export default router;
