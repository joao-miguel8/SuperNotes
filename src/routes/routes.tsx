import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const FlashCardsPage = lazy(() => import("../pages/flashcards-page/FlashCardsPage"));
const CanvasPage = lazy(() => import("../pages/canvas-page/CanvasPage"));
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
	{
		path: "/canvas",
		element: (
			<Suspense>
				<CanvasPage />,
			</Suspense>
		),
	},
]);
