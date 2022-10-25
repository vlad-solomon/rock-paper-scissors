import { createContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
	const [score, setScore] = useState(0);
	const [isShowing, setIsShowing] = useState(false);
	const [isGameOver, setIsGameOver] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [userPick, setUserPick] = useState("");
	const [housePick, setHousePick] = useState("");

	const value = {
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
