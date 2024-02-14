import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const FlashCardsPage = lazy(() => import("../pages/FlashCards"));
const CanvasPage = lazy(() => import("../pages/Canvas"));
const ErrorPage = lazy(() => import("../pages/Error"));

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
