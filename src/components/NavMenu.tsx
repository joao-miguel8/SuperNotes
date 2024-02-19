import { Icon } from "@chakra-ui/react";
import classNames from "classnames";
import { useState } from "react";
import { IconType } from "react-icons";
import { TbChalkboard } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

function NavMenu() {
	const routeLocation = useLocation();

	type NavigationMenuItemType = {
		title: string;
		path: string;
		icon: IconType;
	};

	const navigationMenu: NavigationMenuItemType[] = [
		{ title: "Flashcards", path: "/flashcards", icon: GrNotes },
		{ title: "Canvas", path: "/canvas", icon: TbChalkboard },
		{ title: "Editor", path: "/codeEditor", icon: FaCode },
	];
	const [currentPage] = useState(routeLocation.pathname);

	return (
		<>
			{/* side menu container */}
			<div className="py-2 mx-auto max-w-80 w-fit h-full">
				{/* nav list  */}
				<nav className="flex justify-center">
					{/* flex flex-col */}
					<ul className="flex text-[#F6F9F8] divide-x divide-[#292F33]">
						{navigationMenu.map((navItem: NavigationMenuItemType) => {
							const currentlyChosenMenuItem = navItem.path === currentPage;
							return (
								<li key={navItem.title} className={classNames(` items-center gap-2 font-semibold hover:bg-[#434d52] ${currentlyChosenMenuItem && "bg-[#353E43]"}`)}>
									<Link className="px-2 py-2 flex justify-center items-center h-full w-full rounded-md" to={navItem.path}>
										<Icon className={classNames(`ml-2 ${currentlyChosenMenuItem && "text-white"}`)} as={navItem.icon} color={currentlyChosenMenuItem ? "text-white" : "#ADB0B1"} boxSize={5} />
										<span className={classNames(`break-words ml-2 text-12 text-[#ADB0B1] ${currentlyChosenMenuItem && "text-white"}`)}>{navItem.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default NavMenu;
