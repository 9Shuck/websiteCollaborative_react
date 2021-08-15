import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import villeparis4 from "../../img/villeparis4.jpg";
import ninos from "../../img/ninos.jpg";
import guarde from "../../img/guarde.jpg";
import guardeComedor from "../../img/guardeComedor.jpg";
import index from "../../styles/index.scss";
//Creamos la funcion Carousel
function ControlledCarousel() {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		//Devolvemos las slides con sus imagenes
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100 text-center index"
					src={villeparis4}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Nuestra guarderia</h3>
					<p>
						Grandes espacio preparados para el dia a dia de los
						ninos.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 text-center index"
					src={ninos}
					alt="Second slide"
				/>
				<Carousel.Caption>
					<h3>Alumnos en un dia normal</h3>
					<p>
						Los ninos compaginan diferentes actividades a lo largo
						del dia.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 text-center index"
					src={guarde}
					alt="Third slide"
				/>
				<Carousel.Caption>
					<h3>Area de juegos</h3>
					<p>
						Zona recreativa donde los ninos desarrollan su
						psicomotricidad.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 text-center index"
					src={guardeComedor}
					alt="Fourth slide"
				/>
				<Carousel.Caption>
					<h3>Comedor infantil</h3>
					<p>
						En el comedor se disfruta de un menu variado donde los
						ninos descubren nuevos sabores.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
//render(<ControlledCarousel />);
export default ControlledCarousel;
