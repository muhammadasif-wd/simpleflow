import { Button } from '@nextui-org/react';
import React from 'react';
import HeadingText from '../header/HeadingText/HeadingText';

const WhoWeAre = () => {
	return (
		<div className="bg-primaryColor">
			<div className="ps-[172px] py-[170px]">
				<HeadingText
					styles={'md:w-1/2 text-start items-center'}
					textStyle={'text-white'}
					heading={'Who We Are'}
					subheading={`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
				/>
				<Button
					radius="full"
					className="bg-gradient-to-r from-secondaryColor to-lightSecondary text-white shadow-lg font-bold px-8 mt-6"
				>
					Read More
				</Button>
			</div>
			<div>
				<img src="" alt="" />
			</div>
		</div>
	);
};

export default WhoWeAre;
