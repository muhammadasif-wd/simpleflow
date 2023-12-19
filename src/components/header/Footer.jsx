import React from 'react';
import { footer_items } from '../../data/home/footer_items';
import FooterItem from './FooterItem';

const Footer = () => {
	return (
		<div className="bg-primaryColor h-5/6 w-full pt-20 px-40">
			<footer className="bg-[url('https://demo.themefisher.com/agen-bootstrap/images/backgrounds/map.png')] h-96 max-w-full dark:bg-gray-900 bg-cover">
				<div className="flex flex-col justify-center items-center h-full">
					{footer_items.map((item) => (
						<FooterItem item={item} key={item._id}></FooterItem>
					))}
				</div>
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
