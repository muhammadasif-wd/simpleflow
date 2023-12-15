import React from 'react';
import Title from '../../shared/Title';

const Hero = () => {
	return (
		<div className="bg-no-repeat max-w-full bg-[url('https://demo.themefisher.com/agen-bootstrap/images/banner/banner2.jpg')] text-white">
			<Title title={`Creative Agency`} styles={'lg:h-screen md:h-[50vh] h-[60vh] flex justify-center items-center text-white font-bold'} />
		</div>
	);
};

export default Hero;
