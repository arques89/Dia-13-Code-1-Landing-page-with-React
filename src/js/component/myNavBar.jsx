import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import propTypes from "prop-types";

export const NavBar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					{props.title}
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a
								class="nav-link active"
								aria-current="page"
								href="#">
								{props.home}
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								{props.about}
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								{props.services}
							</a>
						</li>
						<li class="nav-item">
							<a
								class="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								{props.contact}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	title: PropType.string,
	home: PropType.string,
	about: PropType.string,
	services: PropType.string,
	contact: PropType.string,
};

ReactDOM.render(<NavBar />, document.querySelector("#app"));
