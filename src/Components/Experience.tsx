import React from "react";
import ExperienceCover from "../Assets/experience.jpg";

const Experience = () => {
	return (
		<div className="experience">
			<img src={ExperienceCover} alt="Finger pointing at a Laptop screen" />
			<h1>Experience</h1>
			<ul className="list-container">
				<li>
					Full Stack Software Engineer, Associate @ PwC Greece <br /> 2021 -
					Present (
					{Math.abs(
						Math.round(
							(new Date().getTime() - new Date("Jul 19, 2021").getTime()) /
								(1000 * 60 * 60 * 24 * 7 * 4)
						)
					)}{" "}
					months)
				</li>
				<li>
					Research Assistant / Software Engineer @ VVR Group, University of
					Patras <br /> Apr - Nov 2020 (8 months)
				</li>
			</ul>
		</div>
	);
};

export default Experience;
