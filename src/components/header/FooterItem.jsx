import { Icon } from '@iconify/react';
import { Link } from '@nextui-org/react';
import React from 'react';

const FooterItem = ({ item }) => {
	console.log(item);
	const { aboutCompany, followUsMessage, location } = item[0];
	return (
		<div>
			<div className="  text-white">
				<div className="mx-auto w-full h-full max-w-screen-xl ">
					<div className="grid grid-cols-3 gap-8 px-2 py-6 lg:py-8 md:grid-cols-3 mx-auto text-white">
						<article>
							<Link
								href="/"
								className="hover:underline text-3xl font-bold text-white"
							>
								Simple Flow
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium">
								<p className="my-8 text-justify">{aboutCompany}</p>
							</div>
						</article>
						<article>
							<Link
								href="/"
								className="hover:underline text-3xl font-bold text-white"
							>
								Follow US
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium">
								<p className="mt-8 text-justify">{followUsMessage}</p>
								<div className="flex">
									<Icon className="w-20 h-20" icon="la:facebook" />
									<Icon
										className="w-20 h-20"
										icon="teenyicons:youtube-outline"
									/>
									<Icon className="w-20 h-20" icon="pajamas:x" />
									<Icon className="w-20 h-20" icon="la:linkedin" />
								</div>
							</div>
						</article>
						<article>
							<Link
								href="/"
								className="hover:underline text-3xl font-bold text-white"
							>
								Location
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium flex">
								<span>
									<Icon
										className="w-10 h-10 mt-8"
										icon="system-uicons:location"
									/>
								</span>
								<p className="mt-8 text-justify">{location}</p>
							</div>
							<div className="text-bold dark:text-gray-400 font-medium flex justify-start">
								<span>
									<Icon className="w-10 h-10 mt-8" icon="tdesign:call-1" />
								</span>
								<p className="mt-10 text-start">+88 01285462158</p>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterItem;
