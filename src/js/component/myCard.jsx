import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div class="col">
			<div className="card  text-center bg-transparent border-1 mx-0 h-100">
				<img
					className="card-img-top"
					alt="Card image cap"
					src={props.imageUrl}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<hr />
					<a href={props.buttonUrl} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	imageUrl: PropType.string,
	buttonLabel: PropType.string,

	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard />, document.querySelector("#app"));
