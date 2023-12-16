import React from 'react';
import Title from '../../shared/Title';
import { images } from '../../shared/images';

const Hero = () => {
	return (
		<div style={{ backgroundImage: `url(${images.home_banner})`, backgroundRepeat: 'no-repeat' }} className={`max-w-full text-white`}>
			<Title title={`Creative Agency`} styles={'lg:h-screen md:h-[50vh] h-[60vh] flex justify-center items-center text-white font-bold'} />
		</div>
	);
};

export default Hero;
