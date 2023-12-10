import React, { Suspense } from 'react';
import Loading from '../shared/Loading';
import Team from './About/Team';

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<div>Home</div>
			<Team></Team>
		</Suspense>
	);
};

export default Home;
