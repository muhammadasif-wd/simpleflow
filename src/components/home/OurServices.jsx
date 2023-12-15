import React from 'react';
import HeadingText from '../../shared/HeadingText';
import UnderLine from '../../shared/UnderLine';
import OurService from './OurService';
import { service_card } from '../../data/service_card';

const OurServices = () => {
	return (
		<main className="text-center text-dark py-10">
			<section>
				<HeadingText
					styles={'lg:w-1/2 md:w-2/3 w-11/12 mx-auto my-3'}
					heading={'Our services'}
					subheading={`Tech firms provide software development, web/mobile apps, IT consulting,
					cloud services, cybersecurity, data analytics, UI/UX design, and
					hardware solutions. They develop software, manage systems, ensure
					security, analyze data, and offer design and consulting services.`}
				/>
				<div className='flex justify-center'>
					<UnderLine style={'w-48 h-2'} />
				</div>
			</section>
			<section className="flex flex-wrap justify-center gap-7 my-10">
				{service_card?.map(({ img, title, subtitle, isActive }, index) => (
					<OurService key={index} img={img} title={title} subtitle={subtitle} isActive={isActive} />
				))}
			</section>
		</main>
	);
};

export default OurServices;
