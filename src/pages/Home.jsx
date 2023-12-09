import React, { Suspense } from 'react';
import Loading from '../shared/Loading';

const Home = () => {
	return (
		<Suspense fallback={<Loading />}>
			<div>Home</div>
		</Suspense>
	);
};

export default Home;
