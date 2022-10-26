import { createContext, useState, useEffect } from "react";
import { options } from "../components/Options/Options";

const gameTable = [
	["tie", "win", "lose"],
	["lose", "tie", "win"],
	["win", "lose", "tie"],
];

const GameContext = createContext();

export function GameProvider({ children }) {
	const [score, setScore] = useState(0);
	const [isShowing, setIsShowing] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [userPick, setUserPick] = useState("");
	const [housePick, setHousePick] = useState("");
	const [message, setMessage] = useState("");

	function determineGame(user, house) {
		const userChoice = options.findIndex((choice) => choice === user);
		const houseChoice = options.findIndex((choice) => choice === house);
		const result = gameTable[userChoice][houseChoice];
		switch (result) {
			case "win":
				setMessage("you win");
				setScore((prev) => prev + 1);
				break;
			case "lose":
				setMessage("you lose");
				setScore((prev) => (prev - 1 <= 0 ? 0 : prev - 1));
				break;
			default:
				setMessage("it's a tie");
				break;
		}
	}

	useEffect(() => {
		if (userPick && housePick) {
			console.log(userPick, housePick);
			determineGame(userPick, housePick);
		}
	}, [userPick, housePick]);

	const value = {
		message,
		setMessage,
		score,
		setScore,
		isShowing,
		setIsShowing,
		isGameOver,
		setIsGameOver,
		isPlaying,
		setIsPlaying,
		userPick,
		setUserPick,
		housePick,
		setHousePick,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameContext;
