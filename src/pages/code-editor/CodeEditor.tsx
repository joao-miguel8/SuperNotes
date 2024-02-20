import Header from "@/layouts/Header";
import CodeEditorWrapper from "./components/CodeEditorWrapper";

function CodeEditor() {
	return (
		<div className="h-screen border-2">
			<Header />
			<CodeEditorWrapper />
		</div>
	);
}

export default CodeEditor;
