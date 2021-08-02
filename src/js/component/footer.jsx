import React from "react";
import Button from "react-bootstrap/Button";
const Footer = () => {
	return (
		<div className="container-fluid footer-all p-0 ">
			<div className="text-center">
				<img src="https://www.escuelainfantilpizcas.com/wp-content/uploads/2019/04/educacion_infantil_pizcas_animals-1080x319.jpg"></img>
			</div>
			<div className=" footer-header bg-danger border-top p-1">
				<h2 className="text-center text-white mt-3">
					Escuela Infantil La Vinoteca
				</h2>
			</div>
			<div className="footer-bdy row">
				<div className="col-4  rounded text-center text-danger mt-4">
					<h4 className="mt-3 mr-3">Contact Information:</h4>
					<div className="iconsDiv d-flex flex-wrap mt-5 justify-content-evenly">
						<i className="fas fa-map-marked-alt fa-2x  mb-1 text-danger">
							{""}
						</i>

						<i className="fas fa-envelope fa-2x  mb-1 text-danger">
							{""}
						</i>

						<i className="fas fa-phone fa-2x  text-danger"> {""}</i>
					</div>
				</div>
				<div className="col-4 rounded text-center">
					<p className="text-center mt-5 text-danger mb-4">
						Why are we Nursery School in Fuerteventura? Well, to
						begin with, the term nursery is in disuse. This concept
						indicated that it was a place where children were kept.
						And in the nursery their workers were in charge of
						taking care of them.
					</p>
					<Button variant="danger">Book now!</Button>
				</div>
				<div className="col-4 rounded text-danger text-center">
					<h4 className="mb-3 mt-5">Social Media:</h4>
					<div className="socialIcons">
						<i className="fab fa-facebook-square fa-3x"></i>
						<i className="fab fa-twitter-square fa-3x"></i>
						<i className="fab fa-instagram fa-3x"></i>
					</div>
				</div>
			</div>
			<div className=" footer-footer">
				<h6 className="text-center text-muted mt-5 mr-3">
					@Florence-Paloma @Lucascg1997 @VinoliaBarreto @9Shuck
				</h6>
			</div>
		</div>
	);
};

export default Footer;
