import React, { Suspense, lazy } from 'react';
import Loading from '../shared/Loading';
const Hero = lazy(() => import('../components/home/Hero'));
const OurServices = lazy(() => import('../components/home/OurServices'));
const Around = lazy(() => import('../components/home/Around'));
const OurTeams = lazy(() => import('../components/home/OurTeams'));
const AboutMe = lazy(() => import('../components/home/AboutMe'));
const Features = lazy(() => import('../components/home/Features'));
const Events = lazy(() => import('../components/home/Events'));
const PricingCard = lazy(() => import('../components/home/PricingCard'));

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Hero />
			<OurServices />
			<Around />
			<OurTeams />
			<AboutMe />
			<Features />
			<PricingCard />
			<Events />
		</Suspense>
	);
};

export default Home;
