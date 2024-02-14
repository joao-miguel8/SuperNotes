import { Icon } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

const PreviewSearchBar = ({ searchQuery, setSearchQuery, placeHolder }) => {
	return (
		<div className="flex items-center bg-[#1A1F23]">
			<Icon as={IoSearch} boxSize={6} className="ml-4" color={"#6B6C70"} />
			<input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={placeHolder} type="text" className="py-4 px-2 w-full text-white bg-transparent outline-none placeholder:text-[#6B6C70]" />
		</div>
	);
};

export default PreviewSearchBar;
