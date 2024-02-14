import CanvasPage from "../components/canvas/Canvas";
import Header from "../layouts/Header";

function Canvas() {
	return (
		<div className="h-screen flex flex-col">
			<Header isSideNavClosed={false} setIsSideNavClosed={() => ""} />
			<div className="flex-1 h-full">
				<CanvasPage />
			</div>
		</div>
	);
}

export default Canvas;
