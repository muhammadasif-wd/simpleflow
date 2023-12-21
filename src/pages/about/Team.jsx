import React, { Suspense } from 'react';
import OurTeam from '../../components/OurTeam/OurTeam';
import Loading from '../../shared/Loading';

const Team = () => {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<OurTeam></OurTeam>
			</main>
		</Suspense>
	);
};

export default Team;
