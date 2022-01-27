import React from "react";
import PhotoProfile from "../Assets/photo-profile.jpg";

const Headline = () => {
	return (
		<div className="headline">
			<img src={PhotoProfile} alt="profile photo" width="200px" />
			<div className="title">
				<h1>Giannis Koutoulogenis</h1>
				<p>Software Engineer</p>
			</div>
			<div className="summary">
				<h2>Long story short</h2>
				<p>I make websites look beautiful!</p>
			</div>
		</div>
	);
};

export default Headline;
