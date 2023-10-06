import App from "../App";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Home from "../pages/HomePage/Home/Home";
import Doctor from "../pages/DoctorsPage/Doctor";
import Contact from "../pages/ContactPage/Contact";
import Services from "../pages/ServicesPage/Services";
import { createBrowserRouter } from "react-router-dom";
import DoctorDetails from "../pages/DoctorsPage/DoctorDetails";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/services",
				element: <Services />,
			},
			{
				path: "/doctors",
				element: <Doctor />,
			},
			{
				path: "/doctors/:id",
				element: <DoctorDetails />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Signup />,
			},
		],
	},
]);
