function SideNav() {
	return (
		<div className="pt-10 max-w-60 h-screen bg-[#1D2327]">
			{/* divider */}
			<div className="w-full h-[1.6px] bg-[#292F33]"></div>
			{/* nav list  */}
			<nav className="pl-4 flex flex-col h-full">
				<ul className="mt-10 flex flex-col gap-4 flex-1 text-[#F6F9F8]">
					<li>All Notes</li>
					<li>Notifications</li>
					<li>All Tags</li>
					<li>Trash</li>
				</ul>
				{/* tags container */}
				<div className="flex-1">
					<span className="font-semibold text-[#B1B4B6]">TAGS</span>
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
