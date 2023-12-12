import { Icon } from '@iconify/react';
import React from 'react';
import { service_card } from '../../data/service_card';

const ServiceCard = () => {
	return (
		<div className="flex justify-center gap-7 my-10">
			{service_card.slice(0, 1).map(({ img, title, subtitle }, index) => (
				<div key={index} className="group bg-primaryColor w-80 h-80 flex items-center justify-center shadow drop-shadow-xl">
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
						<article className='text-white'>
							<h1 className="text-2xl font-bold my-4">{title}</h1>
							<p className="my-2">{subtitle}</p>
						</article>
					</div>
				</div>
			))}

			{/* second card (active on hover) */}
			{service_card.slice(1, 99999).map(({ img, title, subtitle }, index) => (
				<div key={index} className="group hover:bg-primaryColor w-80 h-80 flex items-center justify-center shadow drop-shadow-xl">
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
						<article className='group-hover:text-white'>
							<h1 className="text-2xl font-bold my-4">{title}</h1>
							<p className="my-2">{subtitle}</p>
						</article>
					</div>
				</div>
			))}
		</div>
	);
};

export default ServiceCard;
