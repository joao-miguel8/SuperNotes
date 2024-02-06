import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const Boards = lazy(() => import("../pages/Boards"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/allNotes" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/boards",
		element: <Boards />,
	},
]);
