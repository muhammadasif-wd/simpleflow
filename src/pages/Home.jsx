import React, { Suspense, lazy } from 'react';
import WhoWeAre from '../components/whoWeAre/WhoWeAre';
import Loading from '../shared/Loading';
import Team from './About/Team';
const Hero = lazy(() => import('./../components/hero/Hero'));
const OurService = lazy(() => import('./../components/OurService/OurService'));
const ServiceCard = lazy(
	() => import('./../components/OurService/ServiceCard')
);

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Hero></Hero>
			<OurService></OurService>
			<ServiceCard></ServiceCard>
			<Team></Team>
			<WhoWeAre></WhoWeAre>
		</Suspense>
	);
};

export default Home;
