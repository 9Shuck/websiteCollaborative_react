import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import psicomotricidad from "../../img/psicomotricidad.jpg";
import alimentación from "../../img/alimentación.jpg";
import familias from "../../img/familia1.jpg";

const Cards = () => {
	return (
		<CardGroup id="cardGroup">
			<Card>
				<Card.Img variant="top" src={psicomotricidad} />
				<Card.Body>
					<Card.Title>AULA DE PSICOMOTRICIDAD Y BEBETECA</Card.Title>
					<Card.Text>
						Trabajamos el conocimiento del esquema corporal, el
						equilibrio, la respiración, la postura, la lateralidad,
						la estructuración espacio-temporal y la coordinación. La
						Bebeteca es un espacio para dar un lugar especial a los
						Cuentos en la vida de los pequeños y despertar su
						interés por la lectura.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src={alimentación} />
				<Card.Body>
					<Card.Title>ALIMENTACIÓN SALUDABLE</Card.Title>
					<Card.Text>
						Disponemos de menús diseñados por edades adecuados a las
						necesidades alimentarias de cada etapa, elaborados por
						expertos nutricionistas que se adaptan a la normativa
						europea de alérgenos e intolerancias alimentarias.
						Tenemos implantado el sistema de Análisis de Peligros y
						Puntos Críticos de Control (APPCC) alimentario.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card>
				<Card.Img variant="top" src={familias} />
				<Card.Body>
					<Card.Title>TRABAJO CON LAS FAMILIAS</Card.Title>
					<Card.Text>
						En nuestro Centro damos mucha importancia a la
						colaboración y participación de las familias, realizando
						talleres, tanto de mañana como de tarde, en los que
						puedan participar junto a sus hijos, asistir a Fiestas,
						asambleas, etc. Tratamos de establecer una relación
						cercana entre el hogar y la Escuela, a través de una
						comunicación fluida y diversas actividades, para
						garantizar una educación conjunta.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
	);
};

export default Cards;
