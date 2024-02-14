import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import ChakraProviderWrapper from "./services/providers/ChakraProviderWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProviderWrapper>
			<RouterProvider router={router} />
		</ChakraProviderWrapper>
	</React.StrictMode>
);
