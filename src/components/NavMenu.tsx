import { Icon } from "@chakra-ui/react";
import classNames from "classnames";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiTag } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function NavMenu() {
	const routeLocation = useLocation();

	type NavigationMenuItemType = {
		title: string;
		path: string;
		icon: IconType;
	};

	const navigationMenu: NavigationMenuItemType[] = [
		{ title: "Boards", path: "/boards", icon: GrNotes },
		{ title: "Notifications", path: "", icon: IoMdNotificationsOutline },
		{ title: "All Tags", path: "", icon: TiTag },
		{ title: "Trash", path: "", icon: FaRegTrashAlt },
	];
	const [currentPage] = useState(routeLocation.pathname);

	return (
		// side menu wrapper
		<section className="p-2 h-fit max-w-60 w-40 top-10 left-8 fixed z-40 bg-[#1D2327] rounded-lg">
			{/* side menu container */}
			<div className="pt-1 max-w-60 h-full">
				{/* divider */}
				<div className="w-full h-[1.6px] bg-[#292F33]"></div>
				{/* nav list  */}
				<nav className="flex flex-col h-full">
					<ul className="mt-4 flex flex-col text-[#F6F9F8]">
						{navigationMenu.map((navItem: NavigationMenuItemType) => {
							const currentlyChosenMenuItem = navItem.path === currentPage;

							return (
								<li key={navItem.title} className={classNames(` items-center gap-2 font-semibold rounded-md ${currentlyChosenMenuItem && "bg-[#353E43]"}`)}>
									<Link className="py-2 flex items-center h-full w-full rounded-md" to={navItem.path}>
										<Icon className={classNames(`ml-2 ${currentlyChosenMenuItem && "text-white"}`)} as={navItem.icon} color={currentlyChosenMenuItem ? "text-white" : "#ADB0B1"} boxSize={14} />
										<span className={classNames(`w-20 break-words ml-2 text-12 text-[#ADB0B1] ${currentlyChosenMenuItem && "text-white"}`)}>{navItem.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</section>
	);
}

export default NavMenu;
