import React, { Suspense, lazy } from 'react';
import Loading from '../shared/Loading';
const Banner = lazy(() => import('../shared/Banner'));
const OurServices = lazy(() => import('../components/home/OurServices'));
const Services = () => {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<Banner title={'Our Services'} />
				<OurServices />
			</main>
		</Suspense>
	);
};

export default Services;
