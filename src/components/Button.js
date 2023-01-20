import "../App.css";

function Button() {
	return (
		<>
			<div className="button">
				<button className="email">
					<span>
						<i class="fa-solid fa-envelope"></i>
					</span>
					<span>Email</span>
				</button>
				<button className="linkedin">
					<span>
						<i class="fa-brands fa-linkedin"></i>
					</span>
					<span>LinkedIn</span>
				</button>
			</div>
		</>
	);
}

export default Button;
