import React from "react";
import ExperienceCover from "../Assets/experience.jpg";

const Experience = () => {
	return (
		<div className="experience section">
			<img src={ExperienceCover} alt="Finger pointing at a Laptop screen" />
			<div className="container-text">
				<h1>Experience</h1>
				<div className="list-entries">
					<div className="entry-item">
						<span>Full Stack Software Engineer, Associate @ PwC Greece</span>
						<span className="duration">
							Jul 2021 - Present (
							{Math.abs(
								Math.round(
									(new Date().getTime() - new Date("Jul 19, 2021").getTime()) /
										(1000 * 60 * 60 * 24 * 7 * 4)
								)
							)}{" "}
							months)
						</span>
					</div>
					<div className="entry-item">
						<span className="job-title">
							Research Assistant / Software Engineer @ VVR Group, University of
							Patras
						</span>
						<span className="duration">Apr - Nov 2020 (8 months)</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
