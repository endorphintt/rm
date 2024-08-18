import {
    ABOUT_ROUTE,
    APARTMENTS_ROUTE,
    BLOG_ROUTE,
    FAQ_ROUTE,
    HOME_ROUTE,
    OFFERS_ROUTE,
} from '../../variables/variables'

export const items = [
    {
        nameEN: 'Home',
        namePL: 'Strona główna',
        path: HOME_ROUTE,
        id: 1,
    },
    {
        nameEN: 'Offers',
        namePL: 'Usługi',
        path: OFFERS_ROUTE,
        id: 2,
    },
    {
        nameEN: 'Apartments',
        namePL: 'Mieszkania',
        path: APARTMENTS_ROUTE,
        id: 3,
    },
    {
        nameEN: 'About',
        namePL: 'O nas',
        path: ABOUT_ROUTE,
        id: 4,
    },
    {
        nameEN: 'Blog',
        namePL: 'Blog',
        path: BLOG_ROUTE,
        id: 5,
    },
    {
        nameEN: 'FAQ',
        namePL: 'FAQ',
        path: FAQ_ROUTE,
        id: 6,
    },
]

export const links = [
    {
        id: 1,
        pathToImg: '/img/instagram.svg',
        link: 'https://instagram.com/realsy_management?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr',
        name: '',
    },
    { id: 2, pathToImg: '/img/tiktok.svg', link: '', name: '' },
    {
        id: 3,
        pathToImg: '/img/facebook.svg',
        link: 'https://www.facebook.com/profile.php?id=61552262336445',
        name: '',
    },
]
