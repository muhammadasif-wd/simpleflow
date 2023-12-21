import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/about/About'));

const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/about-us', Component: About },
];

export default publicRoutes;
