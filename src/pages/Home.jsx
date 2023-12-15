import React, { Suspense, lazy } from 'react';
import Loading from '../shared/Loading';
import Team from './about/Team';
const Hero = lazy(() => import('../components/home/Hero'));
const OurServices = lazy(() => import('../components/home/OurServices'));

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Hero />
			<OurServices />
			<Team />
		</Suspense>
	);
};

export default Home;
