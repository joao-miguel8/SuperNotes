import { Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import type { BoardType } from "../types/BoardType";

function AddNewBoard({ showAddNewBoardModal, setShowAddNewBoardModal, setBoards }: { showAddNewBoardModal: boolean; setShowAddNewBoardModal: (bool: boolean) => void; setBoards: (boards: BoardType[]) => void }) {
	const [newBoardFormData, setNewBoardFormData] = useState<BoardType>({
		name: "",
	});

	const handleAddNewBoardSubmit = (e: FormEvent) => {
		e.preventDefault();
		setBoards((prevBoards: BoardType[]) => [...prevBoards, newBoardFormData]);
		setShowAddNewBoardModal(false);
	};

	return (
		<>
			{showAddNewBoardModal ? (
				<>
					{/* ----- Overlay ----- */}
					<div onClick={() => setShowAddNewBoardModal(false)} className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none opacity-25 bg-black"></div>
					{/* ----- Content Container ----- */}
					<div className="max-w-lg w-[400px] flex flex-col z-[60] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg ">
						{/* ----- Header ----- */}
						<div className="p-2 rounded-t bg-[#292F33]">
							<h3 className="text-center text-18 font-semibold text-white">Create a new Board</h3>
						</div>
						{/* ----- Form Content ----- */}
						<form onSubmit={e => handleAddNewBoardSubmit(e)}>
							<div className="p-6 relative flex-auto">
								<Input onChange={e => setNewBoardFormData({ ...newBoardFormData, name: e.target.value })} placeholder="Add a name for your board" size="sm" focusBorderColor="#292F33" />
							</div>
							{/* ----- Footer ----- */}
							<div className="p-2 pt-4 flex items-center justify-end border-t border-solid border-gray-150 rounded-b">
								<button className="font-bold uppercase text-12 ease-linear transition-all duration-150 text-red-400 hover:text-red-600" type="button" onClick={() => setShowAddNewBoardModal(false)}>
									Close
								</button>
								<button className="ml-6 px-2 py-2 text-white text-12 font-bold uppercase ease-linear transition-all duration-150 bg-emerald-400 hover:bg-emerald-500" type="submit">
									Save Changes
								</button>
							</div>
						</form>
					</div>
				</>
			) : null}
		</>
	);
}

export default AddNewBoard;
