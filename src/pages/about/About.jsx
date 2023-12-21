import React, { lazy } from 'react';
const AboutTrusted = lazy(() => import('../../components/about/AboutTrusted'));
const Banner = lazy(() => import('../../shared/Banner'));
const OurTeams = lazy(() => import('../../components/home/OurTeams'));
const AboutVideo = lazy(() => import('../../components/about/AboutVideo'));
const Slider = lazy(() => import('../../components/about/Slider'));

export default function About() {
	return (
		<main>
			<Banner title={`About Agency`} />
			<AboutTrusted />
			<Slider />
			<div className='my-10'>
				<AboutVideo />
			</div>
			<OurTeams />
		</main>
	)
}
