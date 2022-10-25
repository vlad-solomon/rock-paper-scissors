import { useContext } from "react";
import "./Rules.scss";

import rules from "./Rules.svg";
import closeRules from "./CloseRules.svg";

import GameContext from "../../context/GameContext";

function Rules() {
	const { setIsShowing } = useContext(GameContext);
	return (
		<div className="rules">
			<div className="rules__container">
				<span>rules</span>
				<img src={rules} alt="rules" />
				<img src={closeRules} alt="close-rules" onClick={() => setIsShowing(false)} style={{ cursor: "pointer" }} />
			</div>
		</div>
	);
}

export default Rules;
