import { useContext, useEffect, useState } from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button/Button";
import "./GameOver.scss";

import { options } from "../Options/Options";

// const gameTable = [
// 	["tie", "lose", "win"],
// 	["win", "tie", "lose"],
// 	["lose", "win", "tie"],
// ];

const gameTable = [
	["tie", "win", "lose"],
	["lose", "tie", "win"],
	["win", "lose", "tie"],
];

function GameOver() {
	const [message, setMessage] = useState("");
	const { userPick, setUserPick, housePick, setHousePick, setIsGameOver, setIsPlaying, setScore } = useContext(GameContext);

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
		determineGame(userPick, housePick);
	}, [userPick, housePick]);

	return (
		<div className="game-over">
			<span>{message}</span>
			<Button
				text="play again"
				fill
				style={{ padding: "15px 60px" }}
				onClick={() => {
					setIsPlaying(false);
					setIsGameOver(false);
					setUserPick("");
					setHousePick("");
				}}
			/>
		</div>
	);
}

export default GameOver;
