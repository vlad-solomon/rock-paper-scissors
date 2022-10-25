import { useContext } from "react";
import Button from "../Button/Button";
import GameOver from "../GameOver/GameOver";
import "./Footer.scss";

import GameContext from "../../context/GameContext";

function Footer() {
	const { setIsShowing, isGameOver } = useContext(GameContext);
	return (
		<div className="footer">
			{isGameOver && <GameOver />}
			<Button text="rules" onClick={() => setIsShowing(true)} />
		</div>
	);
}

export default Footer;
