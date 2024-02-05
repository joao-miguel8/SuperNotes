import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AllNotes = lazy(() => import("../pages/AllNotes"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AllNotes />,
	},
]);
