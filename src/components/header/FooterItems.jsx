import { Icon } from '@iconify/react';
import { Link } from '@nextui-org/react';
import React from 'react';
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
const FooterItems = () => {
	return (
		<div>
			<div className="  text-white">
				<div className="mx-auto w-full h-full max-w-screen-xl ">
					<div className="grid grid-cols-3 gap-8 px-2 py-6 lg:py-8 md:grid-cols-3 mx-auto text-white">
						<article>
							<Link href="/" className="hover:underline text-3xl font-bold">
								Simple Flow
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium">
								<p className="my-8 text-justify">
									Interlink Technologies Ltd. is a dynamic IT company dedicated
									to providing the best solutions for businesses worldwide. With
									a team of strong experienced professionals, we are committed
									to helping our clients thrive in the digital age. Your success
									is our mission, and were here to make IT happen.
								</p>
							</div>
						</article>
						<article>
							<Link className="hover:underline text-3xl font-bold">
								Follow US
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium">
								<p className="mt-8 text-justify">
									Discover the latest tech advancements, engage in meaningful
									conversations, and gain exclusive access by following
									Interlink Technologies Limited on social media.
								</p>
							</div>
							<div className="flex">
								<img className="w-16" src={facebook} alt="" />
								<img className="w-16" src={linkedin} alt="" />
								<img className="w-16" src={twitter} alt="" />
								<img className="w-16" src={youtube} alt="" />
								<Icon className="w-20 h-20" icon="la:facebook" />
							</div>
						</article>
						<div>
							<Link className="hover:underline text-3xl font-bold">
								Official info
							</Link>
							<div className="text-sm dark:text-gray-400 font-medium">
								<article>
									<p className="mt-8 flex">
										<span className="bg-secondaryColor justify-center flex items-center p-2 m-2 rounded ">
											<Icon icon="system-uicons:location" />
										</span>
										<p>
											86/3, New Eskaton, 4th Floor, Dhaka 1000 (Beside Rupayan
											Trade Centre-Banglamotor).
										</p>
									</p>
									<p className="flex">
										<span className="bg-secondaryColor justify-center flex items-center p-2 m-2 rounded">
											<Icon icon="tdesign:call-1" />
										</span>
										<p className="hover:underline flex items-center">
											01897925400
										</p>
									</p>
								</article>
							</div>
						</div>

						{/* Other divs with similar structure */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterItems;
