import React from 'react';
import FooterItems from './FooterItems';

const Footer = () => {
	return (
		<div className="bg-primaryColor h-[680px] w-full pt-40 px-40">
			<footer className=" bg-[url('https://demo.themefisher.com/agen-bootstrap/images/backgrounds/map.png')] h-96 max-w-full dark:bg-gray-900  bg-cover">
				<FooterItems />
			</footer>
			<div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between text-white">
				<span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
					Copyright © 2023 a theme by{' '}
					<span className="text-secondaryColor font-bold">Tem GroFix</span>
				</span>
			</div>
		</div>
	);
};

export default Footer;
