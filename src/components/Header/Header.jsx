import "./Header.scss";
import logo from "./Logo.svg";

import { useContext } from "react";
import GameContext from "../../context/GameContext";

function Header() {
	const { score } = useContext(GameContext);
	return (
		<div className="header">
			<img src={logo} alt="logo" />
			<div className="header__score">
				<span>score</span>
				<div className="header__score-value">{score}</div>
			</div>
		</div>
	);
}

export default Header;
