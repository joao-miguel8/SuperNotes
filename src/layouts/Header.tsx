import NavMenu from "../components/NavMenu";

function Header() {
	return (
		<header className="p-3 sticky z-40 top-0 bg-[#1D2327]">
			<div className="relative">
				{/* menu */}
				<NavMenu />
			</div>
		</header>
	);
}

export default Header;
