import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

function DeleteDeckModal({ isDeleteDeckModalActive, disableDeleteDeckModal }: { isDeleteDeckModalActive: boolean; disableDeleteDeckModal: () => void }) {
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
						<button color={"red"} className="p-2 bg-red-400 text-white rounded-sm hover:bg-red-500 duration-300">
							Delete
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
export default DeleteDeckModal;
