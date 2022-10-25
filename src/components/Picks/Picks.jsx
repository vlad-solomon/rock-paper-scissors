import { useContext } from "react";
import "./Picks.scss";
import Option from "../Option/Option";
import GameContext from "../../context/GameContext";

function Picks() {
	const { userPick, housePick } = useContext(GameContext);
	return (
		<div className="picks">
			<div className="pick">
				<div className="pick__placeholder">
					<Option type={userPick} />
				</div>
				<span>you picked</span>
			</div>
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
