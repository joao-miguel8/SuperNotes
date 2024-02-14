import { Icon, Tooltip } from "@chakra-ui/react";
import { RxPencil2 } from "react-icons/rx";

function PreviewAddButton({ type, onClick }: { type: string; onClick: () => void }) {
	return (
		<Tooltip arrowSize={8} hasArrow label={`Add a new ${type}`} aria-label="Add a new deck">
			<button onClick={() => onClick()}>
				<Icon as={RxPencil2} color={"#ADB0B1"} boxSize={6} />
			</button>
		</Tooltip>
	);
}

export default PreviewAddButton;
