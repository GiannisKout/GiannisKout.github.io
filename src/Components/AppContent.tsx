import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Headline from "./Headline";
import Volunteering from "./Volunteering";
import "../Css/main.scss";

const AppContent = () => {
	return (
		<>
			<Headline />
			<Experience />
			<Education />
			<Volunteering />
			<Footer />
		</>
	);
};

export default AppContent;
