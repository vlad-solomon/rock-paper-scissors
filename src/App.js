import { useContext } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Rules from "./components/Rules/Rules";
import Options from "./components/Options/Options";
import Footer from "./components/Footer/Footer";
import Picks from "./components/Picks/Picks";

import GameContext from "./context/GameContext";

function App() {
	const { isShowing, isPlaying } = useContext(GameContext);
	return (
		<>
			{isShowing && <Rules />}
			<div className="App">
				<Header />
				{!isPlaying ? <Options /> : <Picks />}
				<Footer />
			</div>
		</>
	);
}

export default App;
