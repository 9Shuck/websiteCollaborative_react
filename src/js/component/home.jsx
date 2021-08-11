import React from "react";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
//include images into your bundle

//create your first component
function Home() {
	return (
		<>
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
