import CanvasPage from "./components/canvas/Canvas";
import Header from "../../layouts/Header";

function Canvas() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<div className="flex-1 h-full">
				<CanvasPage />
			</div>
		</div>
	);
}

export default Canvas;
