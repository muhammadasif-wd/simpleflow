import { Icon } from '@iconify/react';
import React from 'react';

const OurService = ({ img, title, subtitle, isActive }) => {
	return (
		<div className={`group ${isActive ? "bg-primaryColor" : "hover:bg-primaryColor"} w-80 h-80 rounded p-3 flex items-center justify-center shadow border border-dark/5 drop-shadow-xl`}>
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
					<h1 className="text-2xl font-bold my-4">{title}</h1>
					<p className="my-2">{subtitle}</p>
				</article>
			</div>
		</div>
	);
};

export default OurService;