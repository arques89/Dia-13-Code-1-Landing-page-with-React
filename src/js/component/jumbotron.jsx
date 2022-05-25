import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron col-12" id="jumbo">
			<h1 className="display">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron />,

	document.querySelector("#app")
);
