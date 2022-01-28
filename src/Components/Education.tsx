import React from "react";
import EducationCover from "../Assets/education.jpg";

const Education = () => {
	return (
		<div className="education section">
			<img
				src={EducationCover}
				alt="An open book with a pencil on it and a laptop behind."
			/>
			<div className="container-text">
				<h1>Education</h1>
				<div className="list-entries">
					<div className="entry-item">
						<span>
							Electrical & Computer Engineering @ University of Patras, Greece{" "}
							<br /> Integrated MSc (300 ECTS)
						</span>
						<span className="duration">2014-2020</span>
					</div>
					<div className="entry-item">
						<span>
							Automation and Control, Erasmus Studies @ Politecnico di Milano,
							Italy
						</span>
						<span className="duration">2018 (6 months)</span>
					</div>
					<div className="entry-item">
						<span>Summer School @ EIT Digital, Trento, Italy</span>
						<span className="duration">2017 (15 days)</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
