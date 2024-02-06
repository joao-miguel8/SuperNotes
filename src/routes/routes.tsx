import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/dashboard" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);
