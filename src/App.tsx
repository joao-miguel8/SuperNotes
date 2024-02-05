import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import SideNav from "./components/SideNav";

function App() {
	return (
		<>
			<ChakraProvider>{/* <SideNav /> */}</ChakraProvider>
		</>
	);
}

export default App;
