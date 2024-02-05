import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AllNotes = lazy(() => import("../pages/AllNotes"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AllNotes />,
		errorElement: <ErrorPage />,
	},
]);
