import { Icon } from '@iconify/react';
import React from 'react';

const OurService = () => {
	return (
		<div className="text-center">
			<h1 className=" mt-24 text-5xl font-bold">Our services</h1>
			<div className="flex justify-center text-lightSecondary">
				<Icon icon="pepicons-pop:line-x" />
			</div>
			<p className="text-lg my-10">
				Tech firms provide software development, web/mobile apps, IT consulting,
				cloud services, cybersecurity, data analytics, <br /> UI/UX design, and
				hardware solutions. They develop software, manage systems, ensure
				security, <br /> analyze data, and offer design and consulting services.
			</p>
		</div>
	);
};

export default OurService;
