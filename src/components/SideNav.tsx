import { Icon } from "@chakra-ui/react";
import classNames from "classnames";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiTag } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
	const routeLocation = useLocation();
	const navigationMenu = [
		{ title: "All Notes", path: "/allNotes", icon: GrNotes },
		{ title: "Notifications", path: "", icon: IoMdNotificationsOutline },
		{ title: "All Tags", path: "", icon: TiTag },
		{ title: "Trash", path: "", icon: FaRegTrashAlt },
	];
	const [currentPage] = useState(routeLocation.pathname);

	return (
		// side menu wrapper
		<section className="max-w-60 h-screen sticky top-0 bg-[#1D2327]">
			{/* side menu container */}
			<div className="pt-10 max-w-60 w-[240px] h-full">
				{/* divider */}
				<div className="w-full h-[1.6px] bg-[#292F33]"></div>
				{/* nav list  */}
				<nav className="mx-4 flex flex-col h-full">
					<ul className="mt-4 flex flex-col text-[#F6F9F8]">
						{navigationMenu.map(navItem => {
							const currentlyChosenMenuItem = navItem.path === currentPage;

							return (
								<li key={navItem.title} className={classNames(`flex items-center gap-2 font-semibold rounded-md ${currentlyChosenMenuItem && "bg-[#353E43]"}`)}>
									<Link className="py-2 h-full w-full rounded-md" to={navItem.path}>
										<Icon className={classNames(`ml-2 ${currentlyChosenMenuItem && "text-white"}`)} as={navItem.icon} color={currentlyChosenMenuItem ? "text-white" : "#ADB0B1"} boxSize={14} />
										<span className={classNames(`ml-2 text-[#ADB0B1] ${currentlyChosenMenuItem && "text-white"}`)}>{navItem.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					{/* tags container */}
					<div className="mt-10">
						<div className="flex justify-between">
							<span className="text-14 font-semibold text-[#B1B4B6]">TAGS</span>
							<button aria-label="edit-tags" className="text-14 font-semibold text-[#F7B93E]">
								EDIT
							</button>
						</div>
						<div className="mt-4 overflow-scroll overflow-x-hidden scrollbar-thin  scrollbar-thumb-gray-600 scrollbar-track-gray-500">
							<ul className="h-full max-h-60 flex flex-col gap-2 font-bold text-white">
								<li>#tag1</li>
								<li>#tag2</li>
								<li>#tag3</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
}

export default SideNav;
