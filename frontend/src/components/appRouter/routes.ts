import {
    HOME_ROUTE,
    OFFERS_ROUTE,
    APARTMENTS_ROUTE,
    FAQ_ROUTE,
    ABOUT_ROUTE,
    LOGIN_ROUTE,
    SYSTEM_ROUTE,
    BLOG_ROUTE,
} from '../../variables/variables'
import About from '../about/About'
import Apartments from '../apartments/Apartments'
import Blog from '../blog/Blog'
import Faq from '../faq/Faq'

import Home from '../home/home'
import Offers from '../offers/Offers'

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
        Component: Offers,
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
    },
    {
        path: APARTMENTS_ROUTE,
        Component: Apartments,
    },
    {
        path: FAQ_ROUTE,
        Component: Faq,
    },
    {
        path: LOGIN_ROUTE,
        Component: Home,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
]

export const authRoutes: Routes[] = [
    {
        path: SYSTEM_ROUTE,
        Component: Home,
    },
]
