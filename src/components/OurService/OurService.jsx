import React from 'react';
import UnderLine from '../../styles/UnderLine';
import HeadingText from '../header/HeadingText/HeadingText';

const OurService = () => {
	return (
		<div className="text-center text-dark">
			<HeadingText
				styles={'md:w-1/2 mx-auto my-3'}
				heading={'Our services'}
				subheading={`Tech firms provide software development, web/mobile apps, IT consulting,
					cloud services, cybersecurity, data analytics, UI/UX design, and
					hardware solutions. They develop software, manage systems, ensure
					security, analyze data, and offer design and consulting services.`}
			/>

			<div className='flex justify-center'><UnderLine style={'w-48 h-2'} /></div>
		</div >
	);
};

export default OurService;
