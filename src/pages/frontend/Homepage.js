import { useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Geocode from "react-geocode";
import Constants from '../../shared/constants';

import HeaderMenu from '../../components/frontend/HeaderMenu';
import Footer from '../../components/frontend/Footer';

import compassIcon from '../../assets/frontend/images/icons/compassIcon.svg';
import mapIcon from '../../assets/frontend/images/icons/mapIcon.svg';
import quality from '../../assets/frontend/images/icons/quality.png';
import exparts from '../../assets/frontend/images/icons/exparts.png';
import privates from '../../assets/frontend/images/icons/private.png';
import transparent from '../../assets/frontend/images/icons/transparent.png';
import annonymous from '../../assets/frontend/images/icons/annonymous.png';
import salon from '../../assets/frontend/images/icons/salon.svg';
import spa from '../../assets/frontend/images/icons/spa.svg';
import unisexSalon from '../../assets/frontend/images/icons/unisexSalon.svg';
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import { BsFillStarFill } from "react-icons/bs";

import '../../assets/frontend/css/homepage.css';

function Homepage(){

	useLayoutEffect(() => {

	    window.scrollTo(0, 0);

	});
	useEffect(()=>{

		Geocode.setApiKey(Constants.GEOCODING_API_KEY);

		Geocode.fromLatLng("48.8583701", "2.2922926").then(
			(response) => {
			  	const address = response.results[0].formatted_address;
			  	console.log(address);
			},
			(error) => {
			  	console.error(error);
			}
		);

	}, []);

	return(
		<Col className="overflowXHiddex">
			<Col className="banner">
				<Col>
					<HeaderMenu classProps={{bgColor: 'transparent', white: false}} />
					<Col className="my-5">
						<h1>You're in the right place</h1>
						<form>
							<Col>
								<Row>
									<Col className="searchContainer" md={5} xs={12}>
										<Image src={compassIcon} alt="" className="prepend" />
										<input type="text" />
										<Image src={mapIcon} alt="" className="append" />
									</Col>
									<Col md={7} xs={12} className="btnContainer">
										<button type="submit">Explore More</button>
									</Col>
								</Row>
							</Col>
						</form>
					</Col>
				</Col>
				<Col className="bannerSectionBelow">
					<Col>
						<Row className="text-center">
							<Col className="bannerBox">
								<Image src={quality} alt="Quality" /><br /><br />
								<p>100% QUALITY<br />ASSURED</p>
							</Col>
							<Col className="bannerBox">
								<Image src={exparts} alt="Exparts" /><br /><br />
								<p>EXPERTS<br />ONLY</p>
							</Col>
							<Col className="bannerBox">
								<Image src={privates} alt="Privates" /><br /><br />
								<p>PRIVATE &<br />CONFIDENTIAL</p>
							</Col>
							<Col className="bannerBox">
								<Image src={transparent} alt="Transparent" /><br /><br />
								<p>TRANSPARENT<br />PRICING</p>
							</Col>
							<Col className="bannerBox last">
								<Image src={annonymous} alt="Annonymous" /><br /><br />
								<p className="mb-1">ANONYMOUS<br />DISCUSSIONS</p>
							</Col>
						</Row>
					</Col>
				</Col>
			</Col>
			<Col className="servicesHome">
				<span className="firstService">
					<Image src={salon} alt="Salon" /><br />
					Salon<br />&nbsp;
				</span>
				<span>
					<Image src={spa} alt="Spa" /><br />
					Spa<br />&nbsp;
				</span>
				<span>
					<Image src={unisexSalon} alt="Unisex Salon" /><br />
					Unisex<br />Salon
				</span>
				<span>
					<Image src={commingSoon} alt="Comming Soon" /><br />
					Comming<br />Soon
				</span>
				<span>
					<Image src={commingSoon} alt="Comming Soon" /><br />
					Comming<br />Soon
				</span>
			</Col>
			<Col className="devider">
				<hr />
			</Col>
			<Col className="mainContent">
				<br /><h1 className="h1">Best in Suburbs</h1><br />
				<Col className="content">
					<Row>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
					</Row>
					<Col className="text-center">
						<br /><br /><Link to="/more-services">Explore more...</Link><br /><br />
					</Col>
					<br /><h1 className="h1">Expert Service Providers</h1><br />
					<Row>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
						<Col md={3} xs={12} sm={4}>
							<Col className="p-4">
								<Col className="vendorContainer">
									<Col className="normalDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>
											Timing<br />
											08:00 Hrs to 18:00 Hrs
											<br /><br /><br />
											Review<br />
											<BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
										</small><br />
									</Col>
									<Col className="hoverDetails">
										<h5>Shop / Provider Name</h5>
										<br /><br />
										<small>Available Slots<br />
										109 slots
										<br /><br /><br />
										Address<br />
										120 Link Road,
										Delhi - 400001</small><br />
									</Col>
									<Link to="/service-details" className="btnBooking text-center">
										<strong>Book Appointment</strong>
									</Link>
								</Col>
							</Col>
						</Col>
					</Row>
					<Col className="text-center">
						<br /><br /><Link to="/more-services">Explore more...</Link><br /><br /><br /><br />
					</Col>
				</Col>
			</Col>
			<Footer />
		</Col>
	);

}
export default Homepage;