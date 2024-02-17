import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const FlashCardsPage = lazy(() => import("../pages/flashcards/FlashCards"));
const CanvasPage = lazy(() => import("../pages/canvas/Canvas"));
const StudyDeck = lazy(() => import("../pages/studydeck/StudyDeck"));
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
		path: "/flashcards/studydeck/:deckID",
		element: <StudyDeck />,
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
