import "../App.css";
import Image from "./Image.js";
import Header from "./Header.js";
import Button from "./Button.js";
import Main from "./Main";
import Footer from "./Footer";

function Card() {
	return (
		<>
			<div className="card">
				<Image />
				<Header />
				<Button />
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default Card;
