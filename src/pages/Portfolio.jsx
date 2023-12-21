import React from 'react';
import Features from '../components/home/Features';
import Title from '../shared/Title';
import { images } from '../shared/images';

const Portfolio = () => {
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(${images.banner_2nd})`,
					backgroundRepeat: 'no-repeat',
				}}
				className={`max-w-full text-white`}
			>
				<Title
					title={`Our Feature`}
					styles={
						'3xl:h-[50rem] 2xl:h-[40rem] xl:h-[38rem] lg:h-[30rem] md:h-[25rem] h-[20rem] flex justify-center items-center text-white font-bold'
					}
				/>
			</div>
			<Features></Features>
		</div>
	);
};

export default Portfolio;
