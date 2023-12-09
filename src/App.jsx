import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/header/Navbar';
import publicRoutes from './routes/publicRoutes';
import Loading from './shared/Loading';

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			<Routes>
				{publicRoutes.map(({ path, Component }, index) => {
					return <Route key={index} path={`${path}`} element={<Component />} />;
				})}
			</Routes>
		</Suspense>
	);
}

export default App;
