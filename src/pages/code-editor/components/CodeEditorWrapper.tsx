import Editor from "@monaco-editor/react";
import { Suspense, useState } from "react";
import type { FileScriptType } from "../types/FileScriptType";
import { fileScripts } from "../constants";

function CodeEditorWrapper() {
	const [fileName, setFileName] = useState<FileScriptType>(fileScripts[fileScripts["javascript.js"].name]);

	return (
		<section className="pt-4 bg-[#1E1E1E] flex h-full">
			{/* languages selection */}
			<div className=" pb-2 h-full px-2 flex flex-col items-center">
				<h2 className="text-14 font-bold text-white">Languages</h2>
				<div className="mt-2 flex flex-col h-full overflow-y-scroll scrollbar-none">
					{Object.keys(fileScripts).map(file => {
						return (
							<button onClick={() => setFileName(fileScripts[file])} className={`p-2 text-20 text-white border-[1.2px] border-[#292F33] bg-[#353E43] hover:bg-[#455058] duration-300 ${fileScripts[file].name === fileName.name && "bg-purple-500 hover:bg-purple-500"}`}>
								<span className="text-14 font-bold">{fileScripts[file].language}</span>
							</button>
						);
					})}
				</div>
			</div>
			<Suspense>
				<Editor height="100%" width="100%" path={fileName.name} theme="vs-dark" defaultLanguage={fileName.language} defaultValue={fileName.value} />
			</Suspense>
		</section>
	);
}

export default CodeEditorWrapper;
