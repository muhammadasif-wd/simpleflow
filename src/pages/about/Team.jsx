import React, { Suspense, lazy } from 'react';
import Loading from '../../shared/Loading';
const Banner = lazy(() => import('../../shared/Banner'));
const OurTeams = lazy(() => import('../../components/home/OurTeams'));

export default function Team() {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<Banner title={'Meet Our Full Team'} />
				<div className="my-10">
					<OurTeams />
				</div>
			</main>
		</Suspense>
	)
}

