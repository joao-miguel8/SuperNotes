import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const AllNotes = lazy(() => import("../pages/AllNotes"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/allNotes" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/allNotes",
		element: <AllNotes />,
	},
]);
