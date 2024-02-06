import { IoIosMenu } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import classNames from "classnames";
import NavMenu from "../components/NavMenu";

function Boards() {
	const [isSideNavClosed, setIsSideNavClosed] = useState(true);
	const [currentSnippetTab, setCurrentSnippetTab] = useState<"Boards" | "Components">("Boards");

	return (
		<>
			{/* page header | menu btn */}
			<header className="p-2 mx-2 w-full">
				<div className="relative">
					<button onClick={() => setIsSideNavClosed(prevVal => !prevVal)}>
						<Icon as={IoIosMenu} color={"#ADB0B1"} boxSize={24} />
					</button>
					{/* menu */}
					{isSideNavClosed && <NavMenu />}
				</div>
			</header>
			<div className="inline-flex h-screen w-full">
				{/* Boards + Components snippets list container */}
				<section className="w-80 inline-block">
					<div className="w-80 h-full border-[1.6px] border-[#292F33] bg-[#171C1F]">
						{/* header + search bar wrapper */}
						<div className="sticky top-0">
							{/* header section (title + add Note btn) */}
							<div className="p-[1rem] flex items-center justify-end bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
								<Tooltip
									className="py-1 px-2 text-14 text-white bg-[rgba(68,67,67,0.16)] rounded-[16px] [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[11.6px] border-[1px] border-[rgba(61,60,60,0.42)]"
									arrowSize={15}
									hasArrow
									label="Add a new board"
									aria-label="Add a new board">
									<button>
										<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={24} />
									</button>
								</Tooltip>
							</div>
							{/* Tab Switch Btns container*/}
							<div className="flex justify-center items-center">
								{/* Tab Title 1 */}
								<button onClick={() => setCurrentSnippetTab("Boards")} className={classNames("p-2 flex-1", currentSnippetTab === "Boards" ? "bg-[#353E42]" : "bg-[#171c1f]")}>
									<span className="uppercase text-12 font-bold text-white">Boards</span>
								</button>
								{/* Tab Title 2 */}
								<button onClick={() => setCurrentSnippetTab("Components")} className={classNames("p-2 flex-1", currentSnippetTab === "Components" ? "bg-[#353E42]" : "bg-[#171c1f]")}>
									<span className="uppercase text-12 font-bold text-white">Components</span>
								</button>
							</div>
							{/* Search bar container */}
							<div className="flex items-center bg-[#1A1F23]">
								<Icon as={IoSearch} boxSize={24} className="ml-4" color={"#6B6C70"} />
								<input placeholder="Search boards" type="text" className="py-4 px-2 w-full text-white bg-transparent outline-none placeholder:text-[#6B6C70]" />
							</div>
						</div>
						<div className="w-full scrollbar-none overflow-auto overscroll-contain bg-[#171C1F]"></div>
					</div>
				</section>
				<div className="inline-block bg-red-300 w-full h-8"></div>
			</div>
		</>
	);
}

export default Boards;
