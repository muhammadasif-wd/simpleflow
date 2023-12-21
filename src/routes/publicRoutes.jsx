import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Team = lazy(() => import('../pages/about/Team'));
const About = lazy(() => import('../pages/about/About'));
const Event = lazy(() => import('../pages/about/Events'));

const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
	{ path: '/our-team', Component: Team },
	{ path: '/services', Component: Services },
	{ path: '/portfolios', Component: Portfolio },
	{ path: '/events', Component: Event },
];

export default publicRoutes;
