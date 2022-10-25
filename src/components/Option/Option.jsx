import "./Option.scss";
import { useContext } from "react";

import GameContext from "../../context/GameContext";
import { options } from "../Options/Options";

function Option({ type }) {
	const { setIsPlaying, setIsGameOver, setUserPick, setHousePick } = useContext(GameContext);

	return (
		<div
			className={`option ${type}`}
			onClick={() => {
				setIsPlaying(true);
				setUserPick(type);
				setHousePick(() => {
					return options[Math.floor(Math.random() * options.length)];
				});
				setIsGameOver(true);
			}}
		>
			<img src={require("./" + type + ".svg")} alt={type} />
		</div>
	);
}

export default Option;
