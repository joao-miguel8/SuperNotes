import { IoIosMenu } from "react-icons/io";
import NavMenu from "../components/NavMenu";
import { Icon } from "@chakra-ui/react";

function Header({ isSideNavClosed, setIsSideNavClosed }: { isSideNavClosed: boolean; setIsSideNavClosed: () => void }) {
	return (
		<header className="p-2 mx-2 sticky z-40 top-0">
			<div className="relative">
				<button onClick={() => setIsSideNavClosed()}>
					<Icon as={IoIosMenu} color={"#ADB0B1"} boxSize={24} />
				</button>
				{/* menu */}
				{isSideNavClosed && <NavMenu />}
			</div>
		</header>
	);
}

export default Header;
