import React from 'react';
import Slider from '../../components/about/Slider';
import Banner from '../../shared/Banner';
import OurTeams from '../../components/home/OurTeams';
import AboutVideo from '../../components/about/AboutVideo';

const About = () => {
	return (
		<main>
			<Banner title={`About Agency`} />
			<Slider />
			<div className='my-10'>
				<AboutVideo />
			</div>
			<OurTeams />
		</main>
	);
};

export default About;
