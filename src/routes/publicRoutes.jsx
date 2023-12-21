import { lazy } from 'react';
const Team = lazy(() => import('../pages/about/Team'));
const Events = lazy(() => import('../pages/about/Events'));
const Services = lazy(() => import('../pages/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Contact = lazy(() => import('../pages/Contact'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/about/About'));

const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/about-us', Component: About },
	{ path: '/our-team', Component: Team },
	{ path: '/events', Component: Events },
	{ path: '/services', Component: Services },
	{ path: '/portfolios', Component: Portfolio },
	{ path: '/contact', Component: Contact },
];

export default publicRoutes;
