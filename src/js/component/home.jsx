import React from "react";

//include images into your bundle

import { Jumbotron } from "./jumbotron.jsx";
import { BootstrapCard } from "./myCard.jsx";
import { NavBar } from "./myNavBar.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<NavBar
				title="Start Bootstrap"
				home="Home"
				about="About"
				services="Services"
				contact="Contact"
			/>
			<div>
				<Jumbotron
					title="A warm welcome!"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo quas perferendis consequatur ut. Corrupti iusto dolor nam exercitationem a blanditiis deserunt cumque doloremque, veritatis, vel dicta recusandae nostrum itaque!"
					buttonLabel="Call to action!"
					buttonURL="https://reactjs.org/"
				/>
				<div class="row  row-cols-md-4 g-1 ms-5" id="card">
					<BootstrapCard
						title="Card title"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque eaque corrupti commodi, quia doloremque sint cum optio error illo saepe, odio est rerum explicabo assumenda facilis aliquam. Ipsam, quam."
						buttonUrl=""
						imageUrl="https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/21/86828440-B1FB-43AC-9E9C-A94AC6A4B8BD/default.jpg?crop=1300,731,x0,y0&width=1600&height=1069&optimize=low"
						buttonLabel="Find out more!"
					/>

					<BootstrapCard
						title="Card title"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque eaque corrupti commodi, quia doloremque sint cum optio error illo saepe, odio est rerum explicabo assumenda facilis aliquam. Ipsam, quam."
						buttonUrl=""
						imageUrl="https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/21/86828440-B1FB-43AC-9E9C-A94AC6A4B8BD/default.jpg?crop=1300,731,x0,y0&width=1600&height=1069&optimize=low"
						buttonLabel="Find out more!"
					/>
					<BootstrapCard
						title="Card title"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque eaque corrupti commodi, quia doloremque sint cum optio error illo saepe, odio est rerum explicabo assumenda facilis aliquam. Ipsam, quam."
						buttonUrl=""
						imageUrl="https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/21/86828440-B1FB-43AC-9E9C-A94AC6A4B8BD/default.jpg?crop=1300,731,x0,y0&width=1600&height=1069&optimize=low"
						buttonLabel="Find out more!"
					/>
					<BootstrapCard
						title="Card title"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque eaque corrupti commodi, quia doloremque sint cum optio error illo saepe, odio est rerum explicabo assumenda facilis aliquam. Ipsam, quam."
						buttonUrl=""
						imageUrl="https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/21/86828440-B1FB-43AC-9E9C-A94AC6A4B8BD/default.jpg?crop=1300,731,x0,y0&width=1600&height=1069&optimize=low"
						buttonLabel="Find out more!"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
