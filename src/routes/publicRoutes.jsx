import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About/About'));

const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/about', Component: About },
];

export default publicRoutes;
