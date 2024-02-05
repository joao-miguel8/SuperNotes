import { Icon } from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiTag } from "react-icons/ti";

function SideNav() {
	// C1C2C4;
	const navigationMenu = [
		{ title: "All Notes", page: "", icon: GrNotes },
		{ title: "Notifications", page: "", icon: IoMdNotificationsOutline },
		{ title: "All Tags", page: "", icon: TiTag },
		{ title: "Trash", page: "", icon: FaRegTrashAlt },
	];

	return (
		<div className="pt-10 max-w-60 h-screen bg-[#1D2327]">
			{/* divider */}
			<div className="w-full h-[1.6px] bg-[#292F33]"></div>
			{/* nav list  */}
			<nav className="mx-4 flex flex-col h-full">
				<ul className="mt-4 flex flex-col flex-1 text-[#F6F9F8]">
					{navigationMenu.map(navItem => {
						return (
							<li key={navItem.title} className="py-2 flex items-center gap-2 font-semibold rounded-md">
								<Icon className="ml-2" as={navItem.icon} color={"#ADB0B1"} boxSize={4} />
								<span className="ml-2 text-[#ADB0B1]">{navItem.title}</span>
							</li>
						);
					})}
				</ul>
				{/* tags container */}
				<div className="flex-1">
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
	);
}

export default SideNav;
