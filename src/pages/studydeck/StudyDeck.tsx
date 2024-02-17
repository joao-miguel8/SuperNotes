import { useLocation } from "react-router-dom";

function StudyDeck() {
	const history = useLocation();
	console.log(history);

	return <div>Stody deck</div>;
}

export default StudyDeck;
