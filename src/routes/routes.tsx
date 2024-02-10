import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const FlashCardsPage = lazy(() => import("../pages/FlashCardsPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/flashcards" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/flashcards",
		element: <FlashCardsPage />,
	},
]);
