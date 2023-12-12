import React, { Suspense } from 'react';
import HeadingText from '../../components/header/HeadingText/HeadingText';
import TeamInfo from '../../components/TeamInfo/TeamInfo';
import Service from '../../shared/Service';
import Featured from '../../components/Featured/Featured';
import Loading from '../../shared/Loading';

const Team = () => {
	return (
		<Suspense fallback={<Loading />}>
			<div className='w-full mx-auto'>
				<Service></Service>
				<HeadingText
					styles={'md:w-1/2 mx-auto'}
					heading={'Our Team'}
					subheading={'Tech firms provide software development, web/mobile apps, IT consulting, cloud services, cybersecurity, data analytics, UI/UX design, and hardware solutions. They develop software, manage systems, ensure security, analyze data, and offer design and consulting services.'}
				/>
				<TeamInfo />
				<Featured></Featured>
			</div>
		</Suspense>
	);
};

export default Team;
