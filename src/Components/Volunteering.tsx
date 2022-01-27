import React from "react";
import VolunteeringCover from "../Assets/volunteering.jpg";

const Volunteering = () => {
	return (
		<div className="volunteering">
			<img src={VolunteeringCover} alt="A picture with the text 'TEAM'" />
			<h1>Volunteering</h1>
			<ul className="list-container">
				<li>Logistics Coordinator @ TEDxPatras</li>
				<li>
					EESTEC LC Patras
					<ul>
						<li>Oversight Committee</li>
						<li>Head Organizer & Ambassador of EESTech Challenge Patras</li>
						<li>IT Team</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Volunteering;
