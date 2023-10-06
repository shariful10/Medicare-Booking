import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<div className="min-h-[calc(100vh-350px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default App;
