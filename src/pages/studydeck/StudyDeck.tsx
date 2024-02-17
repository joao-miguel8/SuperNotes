import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { useDeckStore } from "@/services/zustand/useDeckStore";
import { FlashCardType } from "@/types/FlashCardType";

function StudyDeck() {
	const history = useLocation();
	const decks = useDeckStore(state => state.decks);
	const [isStudyingDeck, setIsStudyingDeck] = useState(true);

	const chosenDeck = decks.find(deck => deck?.id === history?.state);
	const [currentFlashCard, setCurrentFlashCard] = useState<FlashCardType>();

	const getRandomFlashCard = () => {
		if (chosenDeck?.flashcards) {
			const randomCardIndex = Math.floor(chosenDeck?.flashcards.length * Math.random());
			setCurrentFlashCard(chosenDeck?.flashcards[randomCardIndex]);
		}
	};

	return (
		<section className="my-4 bg-[#1D2327]">
			<div className="mt-8 mx-10">
				<div className="w-full flex justify-center">
					<div className="relative w-full flex justify-center items-center">
						<span className="text-16 text-center text-white font-bold">1/20</span>
						<button onClick={() => setIsStudyingDeck(false)} className="px-4 py-2 right-0 absolute font-semibold text-white bg-gray-500 hover:bg-gray-700 duration-150 rounded-md">
							Stop Reviewing Deck
						</button>
					</div>
				</div>

				{/* card */}
				<div className="mt-10 bg-white rounded-lg overflow-clip">
					<span className="border-b mt-2 pb-2 px-2 w-full inline-block text-center text-16 italic uppercase font-bold">Back</span>
					<div className=" px-4 max-h-[500px] h-[600px] rounded-lg overflow-scroll overflow-x-auto scrollbar-thin scrollbar-thumb-[#1D2327] scrollbar-track-white">
						<p className="my-4 text-center text-20">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam provident obcaecati totam deserunt beatae, amet ut voluptas omnis sunt nobis consequuntur nulla et similique velit, vitae illum ducimus, temporibus quas molestiae. In officiis ipsa repellendus saepe odit
							eaque laboriosam fugiat? Inventore necessitatibus odit voluptatem, error, accusantium incidunt suscipit accusamus ipsam blanditiis pariatur distinctio tempora exercitationem itaque nesciunt sunt. Reiciendis ratione iste deleniti dolorem, sequi, voluptate pariatur
							provident aspernatur, nobis sunt debitis. Animi ducimus fuga voluptatibus ipsa porro consequuntur rerum officia, eius explicabo voluptas veniam? Non dolores, repudiandae alias in suscipit, accusantium maxime minus obcaecati omnis porro veritatis officiis fugiat doloribus
							ex rerum tempore atque aperiam velit ratione, dolor amet impedit! Itaque porro sit dolorem, veritatis perspiciatis quisquam facilis quis! Alias aperiam assumenda expedita distinctio quisquam itaque libero ut aut labore omnis temporibus tenetur, quibusdam magnam aliquam
							mollitia maiores id natus officia. Nulla, debitis error libero quo modi nihil et? Nisi iusto, labore voluptatem consectetur, corrupti nobis dolorem saepe quidem laudantium facilis hic odit vitae harum, officiis placeat blanditiis aut tenetur inventore earum nam. Laborum
							expedita repellendus nam ducimus sunt, suscipit porro inventore dolore esse corrupti dicta aliquam non. Laudantium consectetur numquam explicabo nesciunt esse quos doloribus quia cumque. Repudiandae, eum. tempore atque aperiam velit ratione, dolor amet impedit! Itaque
							porro sit dolorem, veritatis perspiciatis quisquam facilis quis! Alias aperiam assumenda expedita distinctio quisquam itaque libero ut aut labore omnis temporibus tenetur, quibusdam magnam aliquam mollitia maiores id natus officia. Nulla, debitis error libero quo modi
							nihil et? Nisi iusto, labore voluptatem consectetur, corrupti nobis dolorem saepe quidem laudantium facilis hic odit vitae harum, officiis placeat blanditiis aut tenetur inventore earum nam. Laborum expedita repellendus nam ducimus sunt, suscipit porro inventore dolore
							esse corrupti dicta aliquam non. Laudantium consectetur numquam explicabo nesciunt esse quos doloribus quia cumque. Repudiandae, eum.
						</p>
					</div>
				</div>
				<div className="py-2 mt-4 flex justify-center gap-4">
					<Button colorScheme={"green"} size="lg">
						Easy
					</Button>
					<Button colorScheme={"orange"} size="lg">
						Medium
					</Button>
					<Button colorScheme={"red"} size="lg">
						Hard
					</Button>
				</div>
			</div>
		</section>
	);
}

export default StudyDeck;
