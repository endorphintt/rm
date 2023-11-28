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
import ApartmentPage from '../apartments/apartment/Apartment'
import Blog from '../blog/Blog'
import Post from '../blog/post/Post'
import Faq from '../faq/Faq'

import Home from '../home/home'
import Login from '../login/Login'
import Offers from '../offers/Offers'
import System from '../system/System'

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
        path: APARTMENTS_ROUTE + '/:id',
        Component: ApartmentPage,
    },
    {
        path: FAQ_ROUTE,
        Component: Faq,
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
    {
        path: BLOG_ROUTE + '/:id',
        Component: Post,
    },
]

export const authRoutes: Routes[] = [
    {
        path: SYSTEM_ROUTE,
        Component: System,
    },
]
