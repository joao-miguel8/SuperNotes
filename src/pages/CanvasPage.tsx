import Canvas from "../components/Canvas";
import Header from "../layouts/Header";

function CanvasPage() {
	return (
		<div className="h-screen flex flex-col">
			<Header isSideNavClosed={false} setIsSideNavClosed={() => ""} />
			<div className="flex-1 h-full">
				<Canvas />
			</div>
		</div>
	);
}

export default CanvasPage;
