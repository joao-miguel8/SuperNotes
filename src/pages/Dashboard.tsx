import { RxPencil2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import { useState } from "react";
import classNames from "classnames";
import type { BoardType } from "../types/BoardType";
import Header from "../layouts/Header";
import AddNewBoard from "../components/AddNewBoard";
import BoardPreviewTile from "../components/BoardPreviewTile";

function Dashboard() {
	const [boards, setBoards] = useState<BoardType[]>([]);
	const [isSideNavClosed, setIsSideNavClosed] = useState(false);
	const [showAddNewBoardModal, setShowAddNewBoardModal] = useState(false);
	const [currentSnippetTab, setCurrentSnippetTab] = useState<"Boards" | "Components">("Boards");

	return (
		<>
			<AddNewBoard showAddNewBoardModal={showAddNewBoardModal} setShowAddNewBoardModal={(bool: boolean) => setShowAddNewBoardModal(bool)} setBoards={setBoards} />
			<div className="inline-flex h-screen w-full">
				{/* page header | menu btn */}
				<Header isSideNavClosed={isSideNavClosed} setIsSideNavClosed={() => setIsSideNavClosed(!isSideNavClosed)} />
				{/* Boards + Components preview list wrapper */}
				<section className="w-80 inline-block">
					{/* scrolling container for board tiles list and components list */}
					<div className="w-80 h-full scrollbar-none overflow-auto overscroll-contain border-[1.6px] border-[#292F33] bg-[#171C1F]">
						{/* header + search bar wrapper */}
						<div className="sticky top-0">
							{/* header section (title + add Note btn) */}
							<div className="p-[1rem] flex items-center justify-end bg-[#171C1F] border-b-[1.6px] border-[#292F33]">
								<Tooltip arrowSize={8} hasArrow label="Add a new board" aria-label="Add a new board">
									<button onClick={() => setShowAddNewBoardModal(true)}>
										<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={6} />
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
								<Icon as={IoSearch} boxSize={6} className="ml-4" color={"#6B6C70"} />
								<input placeholder="Search boards" type="text" className="py-4 px-2 w-full text-white bg-transparent outline-none placeholder:text-[#6B6C70]" />
							</div>
						</div>
						{/* boards list */}
						<ul className="mt-4 mx-4 flex flex-col gap-2">
							{boards.map(board => {
								return (
									<li key={board.name}>
										<BoardPreviewTile name={board.name} />
									</li>
								);
							})}
						</ul>
					</div>
				</section>
				{/* left-side main content container */}
				<div className="inline-flex flex-col flex-1 h-full overflow-auto">
					{/* left-side main-content header */}
					<div className="sticky top-0 py-2 w-full bg-[#1D2327]">header</div>
					{/* left-side main-content */}
					<div className="w-full flex-1 bg-white"></div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
