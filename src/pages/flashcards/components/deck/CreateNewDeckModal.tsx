import { FormEvent, useState } from "react";
import { Input } from "@chakra-ui/react";
import type { DeckType } from "@/types/DeckType";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import { generateRandomID } from "@/api/util/generateRandomID";

function CreateNewDeckModal({ showAddNewDeckModal, setShowAddNewDeckModal }: { showAddNewDeckModal: boolean; setShowAddNewDeckModal: (bool: boolean) => void }) {
	const createNewDeck = useDeckStore(state => state.createNewDeck);
	const eleID = generateRandomID();
	const [newDeckFormData, setNewDeckFormData] = useState<DeckType>({
		id: eleID,
		name: "",
		description: "",
		flashcards: [],
		lastReviewed: null,
		subject: "",
		isBookmarked: false,
	});

	const handleAddNewDeckSubmit = (e: FormEvent) => {
		e.preventDefault();
		createNewDeck(newDeckFormData);
		setNewDeckFormData({
			name: "",
			description: "",
			flashcards: [],
			lastReviewed: null,
			subject: "",
			isBookmarked: false,
		});
		setShowAddNewDeckModal(false);
	};

	return (
		<>
			{showAddNewDeckModal ? (
				<>
					{/* ----- Overlay ----- */}
					<div onClick={() => setShowAddNewDeckModal(false)} className=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none opacity-25 bg-black"></div>
					{/* ----- Content Container ----- */}
					<div className="max-w-lg w-[400px] flex flex-col z-[60] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg">
						{/* ----- Header ----- */}
						<div className="p-2 rounded-t bg-[#292F33]">
							<h3 className="text-center text-18 font-semibold text-white">Create a new Deck</h3>
						</div>
						{/* ----- Form Content ----- */}
						<form onSubmit={e => handleAddNewDeckSubmit(e)}>
							<div className="p-6 relative flex flex-col gap-4">
								<Input value={newDeckFormData.name} onChange={e => setNewDeckFormData({ ...newDeckFormData, name: e.target.value })} placeholder="Add a name for your deck" size="sm" focusBorderColor="#292F33" max={18} />
								<Input value={newDeckFormData.subject} onChange={e => setNewDeckFormData({ ...newDeckFormData, subject: e.target.value })} placeholder="Add a subject" size="sm" focusBorderColor="#292F33" max={40} />
								<Input value={newDeckFormData.description} onChange={e => setNewDeckFormData({ ...newDeckFormData, description: e.target.value })} placeholder="Enter a description" size="sm" focusBorderColor="#292F33" max={40} />
							</div>
							{/* ----- Footer ----- */}
							<div className="p-2 pt-4 flex items-center justify-end border-t border-solid border-gray-150 rounded-b">
								<button className="font-bold uppercase text-12 ease-linear transition-all duration-150 text-red-400 hover:text-red-600" type="button" onClick={() => setShowAddNewDeckModal(false)}>
									Close
								</button>
								<button className="ml-6 px-2 py-2 text-white text-12 font-bold uppercase ease-linear transition-all duration-150 bg-emerald-400 hover:bg-emerald-500" type="submit">
									Add Deck
								</button>
							</div>
						</form>
					</div>
				</>
			) : null}
		</>
	);
}

export default CreateNewDeckModal;
