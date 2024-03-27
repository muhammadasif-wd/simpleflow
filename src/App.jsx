import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/header/Navbar';
import publicRoutes from './routes/publicRoutes';
import Loading from './shared/Loading';
import Footer from './components/header/Footer';
import AdminRoutes from './routes/AdminRoutes';

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Header />
			<main className='main'>
				<Routes>
					{publicRoutes.map(({ path, Component }, index) => {
						return <Route key={index} path={`${path}`} element={<Component />} />;
					})}
				</Routes>
				<Routes
					path={"/main-dashboard"}
				// element={
				// 	userPassword === env_pass ? <AdminDashboard /> : <PageNotFound />
				// }
				>
					{/* <Route
						index
						element={<Home />}
					></Route> */}
					{AdminRoutes.map(({ path, Component }, index) => {
						return <Route key={index} path={`${path}`} element={<Component />} />;
					}
						// <Route
						// 	key={index}
						// 	path={path}
						// 	element={
						// 		userPassword === env_pass ? <Component /> : <PageNotFound />
						// 	}
						// />
					)}
				</Routes>
			</main>
			<Footer />
		</Suspense>
	);
}

export default App;
