import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
const CodeEditor = lazy(() => import("@/pages/code-editor/CodeEditor"));
const FlashCardsPage = lazy(() => import("@/pages/flashcards/FlashCards"));
const CanvasPage = lazy(() => import("@/pages/canvas/Canvas"));
const StudyDeck = lazy(() => import("@/pages/studydeck/StudyDeck"));
const ErrorPage = lazy(() => import("@/pages/Error"));

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/flashcards" />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/flashcards",
		element: (
			<Suspense>
				<FlashCardsPage />
			</Suspense>
		),
	},
	{
		path: "/flashcards/studydeck/:deckID",
		element: (
			<Suspense>
				<StudyDeck />
			</Suspense>
		),
	},
	{
		path: "/canvas",
		element: (
			<Suspense>
				<CanvasPage />
			</Suspense>
		),
	},
	{
		path: "/codeEditor",
		element: (
			<Suspense>
				<CodeEditor />
			</Suspense>
		),
	},
]);
