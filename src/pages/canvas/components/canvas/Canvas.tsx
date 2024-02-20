import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { Suspense } from "react";

function Canvas() {
	return (
		<div className="w-full h-full">
			<Suspense>
				<Tldraw />
			</Suspense>
		</div>
	);
}

export default Canvas;
