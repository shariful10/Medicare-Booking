import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Routers/Routers";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster
				toastOptions={{
					success: {
						style: {
							background: "black",
						},
					},
					error: {
						style: {
							background: "black",
						},
					},
					style: {
						color: "white",
					},
				}}
			/>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
