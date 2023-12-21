import React, { Suspense, lazy } from 'react';
import Loading from '../../shared/Loading';
const Banner = lazy(() => import('../../shared/Banner'));
const HomeEvents = lazy(() => import('../../components/home/Events'));

export default function Events() {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<Banner title={'See Our Latest Events'} />
				<div className="my-10">
					<HomeEvents />
				</div>
			</main>
		</Suspense>
	)
}

