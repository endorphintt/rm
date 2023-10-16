import {
    HOME_ROUTE,
    OFFERS_ROUTE,
    APARTMENTS_ROUTE,
    FAQ_ROUTE,
    ABOUT_ROUTE,
    LOGIN_ROUTE,
    SYSTEM_ROUTE,
} from '../../variables/variables'

import Home from '../home/home'

interface Routes {
    path: string
    Component: React.FunctionComponent<{}>
}

export const publicRoutes: Routes[] = [
    {
        path: HOME_ROUTE,
        Component: Home,
    },
    {
        path: OFFERS_ROUTE,
        Component: Home,
    },
    {
        path: ABOUT_ROUTE,
        Component: Home,
    },
    {
        path: APARTMENTS_ROUTE,
        Component: Home,
    },
    {
        path: FAQ_ROUTE,
        Component: Home,
    },
    {
        path: LOGIN_ROUTE,
        Component: Home,
    },
]

export const authRoutes: Routes[] = [
    {
        path: SYSTEM_ROUTE,
        Component: Home,
    },
]
