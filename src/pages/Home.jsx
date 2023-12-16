import React, { Suspense, lazy } from 'react';
import Loading from '../shared/Loading';
import Around from '../components/home/Around';
import OurTeams from '../components/home/OurTeams';
const Hero = lazy(() => import('../components/home/Hero'));
const OurServices = lazy(() => import('../components/home/OurServices'));

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Hero />
			<OurServices />
			<Around />
			<OurTeams />
		</Suspense>
	);
};

export default Home;
