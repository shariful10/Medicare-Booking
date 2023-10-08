import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routers/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<QueryClientProvider client={queryClient}>
				<ToastContainer
					theme="dark"
					position="top-center"
					autoClose={3000}
					closeOnClick
					pauseOnHover={false}
					style={{ zIndex: 3000 }}
				/>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
