import React from 'react';
import footerItems from '../../data/home/footer_items';
const Footer = () => {
	return (
		<div className="bg-primaryColor h-5/6 w-full pt-20 px-40">
			<footer className=" bg-[url('https://demo.themefisher.com/agen-bootstrap/images/backgrounds/map.png')] h-96 max-w-full dark:bg-gray-900  bg-cover">
				{/* <FooterItems /> */}
				{footerItems.map((items) => console.log(items))}
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
