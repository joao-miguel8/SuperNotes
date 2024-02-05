import { IoIosMenu } from "react-icons/io";
import { RxPencil2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import SideNav from "../components/SideNav";

function AllNotes() {
	return (
		<div className="inline-flex">
			<SideNav />
			{/* notes snippets list container */}
			<section className="w-80 inline-block border-[1.6px]   border-[#292F33] bg-[#171C1F]">
				<div className="bg-red-200 h-full">
					{/* header + search bar wrapper */}
					<div className="sticky top-0">
						{/* header section (menu btn + title + add Note btn) */}
						<div className="p-[1rem] flex items-center justify-between bg-[#171C1F] border-b-[1.6px]   border-[#292F33]">
							<button>
								<Icon as={IoIosMenu} color={"#ADB0B1"} boxSize={24} />
							</button>
							<span className=" text-white">All Notes</span>
							<button>
								<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={24} />
							</button>
						</div>
						{/* Search bar container */}
						<div className="flex items-center bg-[#1A1F23]">
							<Icon as={IoSearch} boxSize={24} className="ml-4" color={"#6B6C70"} />
							<input placeholder="Search all notes" type="text" className="py-4 px-2 w-full text-white bg-transparent outline-none placeholder:text-[#6B6C70]" />
						</div>
					</div>
					<div className="w-full h-screen scrollbar-none overflow-auto overscroll-contain bg-[#171C1F]"></div>
				</div>
			</section>
		</div>
	);
}

export default AllNotes;
