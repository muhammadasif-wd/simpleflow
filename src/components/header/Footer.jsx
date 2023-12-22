import { Icon } from '@iconify/react';
import { Link } from '@nextui-org/react';
import React from 'react';
import { images } from '../../shared/images';
import { footer_items } from '../../data/home/footer_items';
import Subtitle from '../../shared/Subtitle';

const Footer = () => {
	return (
		<footer className="bg-primaryColor w-full">
			<section style={{ backgroundImage: `url(${images.map})`, backgroundRepeat: 'no-repeat' }} className="bg-cover">
				<div className="w-11/12 mx-auto pt-10 flex flex-col justify-center items-center">
					{footer_items.map(({ _id, followUsMessage, aboutCompany, facebookURL, contactNumber, linkedinURL, location, locationURL, twitterURL, youtubeURL }) => (
						<div key={_id} className="mx-auto w-full max-w-screen-xl">
							<div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto text-white">
								<article>
									<Subtitle subtitle={`Simple Flow`} styles={`font-bold`} />
									<p className="my-8 text-justify">{aboutCompany}</p>
								</article>
								<article>
									<Subtitle subtitle={`Follow Us`} styles={`font-bold`} />
									<div className="text-sm font-medium">
										<p className="mt-8 text-justify">{followUsMessage}</p>
										<div className="flex items-center gap-3 mt-3">
											<Link target='_blank' className='text-white' href={facebookURL}><Icon className="w-6 h-6" icon="bi:facebook" /></Link>
											<Link target='_blank' className='text-white' href={youtubeURL}><Icon className="w-8 h-8" icon="bi:youtube" /></Link>
											<Link target='_blank' className='text-white' href={twitterURL}><Icon className="w-6 h-6" icon="bi:twitter-x" /></Link>
											<Link target='_blank' className='text-white' href={linkedinURL}><Icon className="w-6 h-6" icon="bi:linkedin" /></Link>
										</div>
									</div>
								</article>
								<article>
									<Subtitle subtitle={`Location`} styles={`font-bold`} />
									<div className='mt-8'>
										<article className="text-white gap-3 flex items-center justify-start my-3">
											<Icon className="w-8 h-8" icon="mdi:location" />
											<Link className='text-white' href={locationURL}>{location}</Link>
										</article>
										<article className="text-white gap-3 flex items-center justify-start ml-3">
											<Icon className="w-6 h-6" icon="bi:telephone-fill" />
											<p className="text-start">{contactNumber}</p>
										</article>
									</div>
								</article>
							</div>
						</div>
					))}
					<p className='text-center my-3'>
						<small className="text-white text-center">
							Copyright &copy; 2023 a theme by
							<span className="text-secondaryColor font-bold">Team Grofix</span>
						</small>
					</p>
				</div>
			</section>
		</footer>
	);
};

export default Footer;