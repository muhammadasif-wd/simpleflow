import React from 'react';
import Title from '../../shared/Title';
import { images } from '../../shared/images';

const Hero = () => {
	return (
		<div style={{ backgroundImage: `url(${images.home_banner})`, backgroundRepeat: 'no-repeat' }} className={`max-w-full text-white`}>
			<Title title={`Creative Agency`} styles={'3xl:h-[50rem] 2xl:h-[40rem] xl:h-[38rem] lg:h-[30rem] md:h-[25rem] h-[20rem] flex justify-center items-center text-white font-bold'} />
		</div>
	);
};

export default Hero;
