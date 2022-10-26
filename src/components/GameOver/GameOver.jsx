import { useContext } from "react";
import GameContext from "../../context/GameContext";
import Button from "../Button/Button";
import "./GameOver.scss";

function GameOver() {
	const { message, setMessage, setUserPick, setHousePick, setIsGameOver, setIsPlaying } = useContext(GameContext);

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
					setMessage("");
					setUserPick("");
					setHousePick("");
				}}
			/>
		</div>
	);
}

export default GameOver;
