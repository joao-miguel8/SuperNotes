import { useDeckStore } from "@/services/zustand/useDeckStore";
import { FlashCardType } from "@/types/FlashCardType";

function EditFlashcardPanel({ currentFlashCard }: { currentFlashCard: FlashCardType }) {
	const updateFlashCardBackField = useDeckStore(state => state.updateFlashCardBackValue);
	const updateFlashCardFrontField = useDeckStore(state => state.updateFlashCardFrontValue);

	return (
		<form className="py-10 px-2 mx-auto mb-4 flex gap-8 items-center flex-col lg:flex-row lg:justify-center">
			<div className="w-full max-w-[500px] lg:w-1/2 bg-white rounded-lg overflow-clip">
				{/* flash card title */}
				<span className="py-2 w-full inline-block text-14 text-center uppercase italic font-bold text-[#171C1F] bg-white border-b">front</span>
				{/* flash card text content container*/}
				<div className="mx-auto w-full max-h-[450px] h-60 overflow-y-auto text-center overscroll-contain scrollbar-none">
					<textarea value={currentFlashCard?.front} onChange={e => updateFlashCardFrontField(currentFlashCard, e.target.value)} name="front" id="front" className="py-4 px-2 inline overflow-auto h-full w-full text-20 text-center scrollbar-none outline-none resize-none" />
				</div>
			</div>

			<div className="w-full max-w-[500px] lg:w-1/2 bg-white rounded-lg overflow-clip">
				{/* flash card title */}
				<span className="py-2 w-full inline-block text-14 text-center uppercase italic font-bold text-[#171C1F] bg-white border-b">back</span>
				{/* flash card text content container*/}
				<div className="mx-auto w-full max-h-[450px] h-60 text-center overflow-y-auto overscroll-contain scrollbar-none">
					<textarea value={currentFlashCard?.back} onChange={e => updateFlashCardBackField(currentFlashCard, e.target.value)} name="back" id="back" className="py-4 px-2 inline overflow-auto h-full w-full text-20 text-center outline-none scrollbar-none resize-none" />
				</div>
			</div>
		</form>
	);
}

export default EditFlashcardPanel;
