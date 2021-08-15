import React from "react";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
import ControlledCarousel from "./controlledCarousel.jsx";
//include images into your bundle

//create your first component
function Home() {
	return (
		<>
			<ControlledCarousel />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
