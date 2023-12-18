import { Icon } from '@iconify/react';
import React from 'react';
import Subtitle from '../../shared/Subtitle';

const OurService = ({ img, title, subtitle, isActive }) => {
	return (
		<div className={`group ${isActive ? "bg-primaryColor" : "hover:bg-primaryColor"} sm:w-80 h-80 w-72 rounded p-3 flex items-center justify-center shadow border border-dark/5 drop-shadow-xl duration-300 ease-in-out`}>
			<div className="text-center text-dark">
				<div className="flex justify-center items-center">
					<div className="bg-gradient-to-r from-secondaryColor to-lightSecondary rounded-full w-28 h-28 flex justify-center items-center">
						<Icon
							className="group-hover:animate-ping text-white"
							icon={`${img}`}
							hFlip={true}
							width={40}
						/>
					</div>
				</div>
				<article className={`${isActive ? "text-white" : "group-hover:text-white text-dark"}`}>
					<Subtitle subtitle={title} styles={`my-3 font-bold`} />
					<p className="my-2">{subtitle}</p>
				</article>
			</div>
		</div>
	);
};

export default OurService;