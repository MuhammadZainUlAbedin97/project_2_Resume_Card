import "../App.css";
import image from "../images/IMG_1711.jpg";

function Image() {
	return (
		<>
			<img
				src={image}
				alt="profile"
				width="400"
				height="500"
				className="profileImage"
			/>
		</>
	);
}

export default Image;
