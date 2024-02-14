import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

function Canvas() {
	return (
		<div className="w-full h-full">
			<Tldraw />
		</div>
	);
}

export default Canvas;
