import { IoIosMenu } from "react-icons/io";
import NavMenu from "../components/NavMenu";
import { Icon } from "@chakra-ui/react";

function Header({ isSideNavClosed, setIsSideNavClosed }: { isSideNavClosed: boolean; setIsSideNavClosed: () => void }) {
	return (
		<header className="p-3 sticky z-40 top-0 bg-[#1D2327]">
			<div className="relative">
				<button onClick={() => setIsSideNavClosed()}>
					<Icon as={IoIosMenu} color={"#ADB0B1"} boxSize={6} />
				</button>
				{/* menu */}
				{isSideNavClosed && <NavMenu />}
			</div>
		</header>
	);
}

export default Header;
