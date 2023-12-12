import { Icon } from '@iconify/react';
import React from 'react';

const ServiceCard = () => {
	return (
		<div className="flex justify-center gap-7">
			{/* first card (always active) */}
			<div className="bg-[#07075d] w-80 h-80  text-white flex items-center justify-center">
				<div className="text-center">
					<div>
						<div className="flex justify-center items-center">
							<div className="bg-gradient-to-r from-secondaryColor to-lightSecondary rounded-full w-16 h-16 flex justify-center items-center">
								<Icon
									className="hover:animate-ping"
									icon="fluent-emoji-high-contrast:artist-palette"
									hFlip={true}
								/>
							</div>
						</div>
						<h1 className="text-2xl font-bold my-4">Design</h1>
						<p>
							{' '}
							dolor sit amet consectetur adipisicing <br /> elit. Nostrum?
						</p>
						<p></p>
					</div>
				</div>
			</div>
			{/* second card (active on hover) */}
			<div className="hover:bg-primaryColor w-80 h-80  hover:text-white text-dark flex items-center justify-center">
				<div className="text-center">
					<div>
						<div className="flex justify-center items-center">
							<div className="bg-gradient-to-r from-secondaryColor to-lightSecondary rounded-full w-16 h-16 flex justify-center items-center">
								<Icon
									className="hover:animate-ping"
									icon="fluent-emoji-high-contrast:artist-palette"
									hFlip={true}
								/>
							</div>
						</div>
						<h1 className="text-2xl font-bold my-4">Development</h1>
						<p className="my-2">
							dolor sit amet consectetur adipisicing <br /> elit. Nostrum?
						</p>
						<p></p>
					</div>
				</div>
			</div>
			{/* third card (active on hover) */}
			<div className="hover:bg-primaryColor w-80 h-80  hover:text-white text-dark flex items-center justify-center">
				<div className="text-center">
					<div>
						<div className="flex justify-center items-center">
							<div className="bg-gradient-to-r from-secondaryColor to-lightSecondary rounded-full w-16 h-16 flex justify-center items-center">
								<Icon
									className="hover:animate-ping"
									icon="fluent-emoji-high-contrast:artist-palette"
									hFlip={true}
								/>
							</div>
						</div>
						<h1 className="text-2xl font-bold my-4">Marketing</h1>
						<p className="my-2">
							dolor sit amet consectetur adipisicing <br /> elit. Nostrum?
						</p>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
