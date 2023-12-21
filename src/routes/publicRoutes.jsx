import { lazy } from 'react';
import Team from '../pages/about/Team';
import Events from '../pages/about/Events';
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/about/About'));

const publicRoutes = [
	{ path: '/', Component: Home },
	{ path: '/about-us', Component: About },
	{ path: '/our-team', Component: Team },
	{ path: '/events', Component: Events },
];

export default publicRoutes;
