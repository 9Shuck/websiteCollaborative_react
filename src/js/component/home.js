import React, { Fragment } from "react";
import Cards from "./cards.jsx";
//include images into your bundle


//create your first component
export function Home() {
	return (
		<Fragment>
			<Cards />
			<Footer />
		</Fragment>
		
	);
}
