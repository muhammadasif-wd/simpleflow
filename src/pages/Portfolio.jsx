import React, { Suspense } from 'react';
import Loading from '../shared/Loading';
import Banner from '../shared/Banner';
import HeadingText from '../shared/HeadingText';
import UnderLine from '../shared/UnderLine';
import { features } from '../data/home/features';
import { Image, Link } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const Portfolio = () => {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<Banner title={'Our Portfolio'} />
				<main className='my-10'>
					<HeadingText heading={`Our Portfolio`} styles={'font-bold'} />
					<UnderLine style={`w-40 h-1.5 mx-auto`} />
					<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-fit mx-auto my-10 place-items-center gap-3'>
						{features.map(({ img, title, link, gitLink }, index) => (
							<div className='relative group w-72 h-72' key={index}>
								<div>
									<Image radius='none' className={`w-72 h-72 -z-50`} src={img} alt={title} />
									<div className='flex justify-between items-center absolute bottom-5 bg-primaryColor text-white w-64 ml-4 group-hover:h-20 h-unit-0 opacity-0 group-hover:opacity-100 px-3 rounded duration-200 ease-out'>
										<h3 className='text-lg font-bold'>{title}</h3>
										<div className='flex items-center gap-3'>
											<Link to={link} className='rounded-full border p-1'>
												<Icon className='w-6 h-6' icon="ph:link-bold" />
											</Link>
											<Link to={gitLink}>
												<Icon className='w-8 h-8' icon="fa:github-square" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</main>
			</main>
		</Suspense>
	);
};

export default Portfolio;
