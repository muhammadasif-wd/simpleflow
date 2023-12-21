import React from 'react';
import Title from '../../shared/Title';
import { images } from '../../shared/images';
import OurTeams from '../home/OurTeams';

const OurTeam = () => {
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
					title={`Our Team`}
					styles={
						'3xl:h-[50rem] 2xl:h-[40rem] xl:h-[38rem] lg:h-[30rem] md:h-[25rem] h-[20rem] flex justify-center items-center text-white font-bold'
					}
				/>
			</div>
			<div className="my-20">
				<OurTeams></OurTeams>
			</div>
		</div>
	);
};

export default OurTeam;
