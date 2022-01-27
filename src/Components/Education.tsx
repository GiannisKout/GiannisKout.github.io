import React from "react";
import EducationCover from "../Assets/education.jpg";

const Education = () => {
	return (
		<div className="education">
			<img
				src={EducationCover}
				alt="An open book with a pencil on it and a laptop behind."
			/>
			<h1>Education</h1>
			<ul className="list-container">
				<li>
					Electrical & Computer Engineering @ University of Patras <br />{" "}
					Patras, Greece | 2014-2020
				</li>
				<li>
					Automation and Control, Erasmus Studies @ Politecnico di Milano <br />
					Milano, Italy | 2018
				</li>
				<li>
					Summer School @ EIT Digital <br /> Trento, Italy | 2017
				</li>
			</ul>
		</div>
	);
};

export default Education;
