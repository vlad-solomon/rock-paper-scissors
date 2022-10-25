import "./Button.scss";

function Button({ text, fill, onClick, style }) {
	return (
		<div className={`button ${fill ? "fill" : ""}`} onClick={onClick} style={style}>
			{text}
		</div>
	);
}

export default Button;
