import React, { Suspense } from 'react';
import Loading from '../../shared/Loading';

const Team = () => {
	return (
		<Suspense fallback={<Loading />}>
			<main>
				<h1>hello</h1>
			</main>
		</Suspense>
	);
};

export default Team;
