import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import { DeckType } from "@/types/DeckType";

function DeleteDeckModal({ selectedDecksToDelete, setSelectedDecksToDelete, isDeleteDeckModalActive, disableDeleteDeckModal }: { selectedDecksToDelete: DeckType[]; setSelectedDecksToDelete: (decks: DeckType[]) => void; isDeleteDeckModalActive: boolean; disableDeleteDeckModal: () => void }) {
	const deleteSelectedDecks = useDeckStore(state => state.DeleteSelectedDecks);
	return (
		<>
			{/* <Button onClick={EnableDeleteDeckModal}>Open Modal</Button> */}

			<Modal isOpen={isDeleteDeckModalActive} onClose={disableDeleteDeckModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Delete Decks</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<p>Are you want to delete these decks?</p>
					</ModalBody>

					<ModalFooter>
						<button className="mr-6 duration-300" onClick={disableDeleteDeckModal}>
							Close
						</button>
						<button
							onClick={() => {
								deleteSelectedDecks(selectedDecksToDelete);
								setSelectedDecksToDelete([]);
								disableDeleteDeckModal();
							}}
							color={"red"}
							className="p-2 bg-red-400 text-white rounded-sm hover:bg-red-500 duration-300">
							Delete
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
export default DeleteDeckModal;
