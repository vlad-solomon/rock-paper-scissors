import "./Options.scss";
import triangle from "./triangle.svg";

import Option from "../Option/Option";

export const options = ["paper", "rock", "scissors"];

function Options() {
	return (
		<div className="options">
			<img src={triangle} alt="triangle" id="triangle" />
			{options.map((option) => {
				return <Option key={option} type={option} />;
			})}
		</div>
	);
}

export default Options;
