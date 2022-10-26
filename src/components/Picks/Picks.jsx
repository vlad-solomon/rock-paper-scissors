import { useContext } from "react";
import "./Picks.scss";
import Option from "../Option/Option";
import GameOver from "../GameOver/GameOver";
import GameContext from "../../context/GameContext";

function Picks() {
	const { userPick, housePick, isGameOver } = useContext(GameContext);
	return (
		<div className="picks">
			<div className="pick">
				<div className="pick__placeholder">
					<Option type={userPick} />
				</div>
				<span>you picked</span>
			</div>
			{isGameOver && <GameOver />}
			<div className="pick">
				<div className="pick__placeholder">
					<Option type={housePick} />
				</div>
				<span>the house picked</span>
			</div>
		</div>
	);
}

export default Picks;
