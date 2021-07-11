import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Accordion, Card  } from 'react-bootstrap';

import HeaderMenu from '../../components/frontend/HeaderMenu';
import Footer from '../../components/frontend/Footer';

import { BsFillStarFill, BsChevronLeft, BsChevronRight, BsStar } from "react-icons/bs";
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import heart from '../../assets/frontend/images/icons/heart.png';
import fb from '../../assets/frontend/images/icons/fb.png';
import linkedin from '../../assets/frontend/images/icons/linkedin.png';
import wa from '../../assets/frontend/images/icons/wa.png';
import right from '../../assets/frontend/images/icons/right.png';
import profileIcon from '../../assets/frontend/images/icons/profileIcon.svg';
import '../../assets/frontend/css/service-details.css';

function ServiceDetails(){
	
	useLayoutEffect(() => {

	    window.scrollTo(0, 0)

	});
	const showAccordin = (e)=>{

		document.querySelectorAll( '.serviceDetails.mainContent .card .nextPrevDate span' ).forEach((el)=>{
			
			el.classList.remove( 'active' );

		});

		e.target.classList.add( 'active' );
	
		document.querySelector( 'strong.selectedDate' ).innerHTML = e.target.innerHTML.replace('<br>', ' ');

		const target = e.target.getAttribute( 'data-day' );

		e.target.parentNode.parentNode.querySelectorAll( '.timeSlotRadio' ).forEach(el=>{

			el.classList.add( 'd-none' );

		});

		e.target.parentNode.parentNode.querySelector( `.${target}` ).classList.remove( 'd-none' );

	}
	return(

		<Col className="overflowXHiddex">
			<Col className="bannerThree">
				<Col>
					<HeaderMenu classProps={{transparent: 'transparent', white: false}} />
					<Col>
						<Col className="goBack pl-0">
							<Link to="/more-services"> <BsChevronLeft /> &nbsp; View All Experts</Link>
						</Col>
						<Col className="bnnerBox">
							<Row>
								<Col md={1} sm={12} xs={12} className="pl-3 commingSoonBig">
									<Image src={commingSoon} alt="Comming Soon" />
								</Col>
								<Col md={7} sm={12} xs={12} className="verdorDetails pl-5">
									<h4>Shop / Provider Name</h4>
									<h6>Shop / Provider Description</h6>
									<small>
										<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> 
										&nbsp; <Link to="/" className="reviewLink">(100 reviews)</Link> &nbsp;  &nbsp; 
									</small>
									<Image src={heart} alt="Heart Icon" /> &nbsp; 37 people<br /><br />
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
										velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
										cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
										est laborum.
									</p>
									<button type="button">Call</button>
								</Col>
								<Col md={4} sm={12} xs={12} className="pl-3">
									<Col>
										Total Clients : 999<br />
										Language: English, German, Spanish<br /><br /><br />
										Timing : 0800Hrs to 1800Hrs<br /><br /><br /><br />
										<Link to="/" className="seeMore">See More <BsChevronRight /></Link><br /><br />
										<strong>Social Profiles</strong><br />
										<a href="https://facebook.com" rel="noreferrer" target="_blank"><Image src={fb} alt="Facebook Icon" /></a> &nbsp; 
										<a href="https://linkedin.com" rel="noreferrer" target="_blank"><Image src={linkedin} alt="Linkedin Icon" /></a> &nbsp; 
										<a href="https://wa.com" rel="noreferrer" target="_blank"><Image src={wa} alt="WhatsApp Icon" /></a> &nbsp; 
									</Col>
								</Col>
							</Row>
						</Col>
					</Col>
				</Col>
			</Col>
			<Col className="serviceDetails mainContent">
				<Col>
					<Image src={right} alt="right" className="right" />
					<span className="headings">Select your desired Service</span>
				</Col>
				<Col className="mt-3">
					<Accordion defaultActiveKey="0">
					  	<Card>
						    <Accordion.Toggle as={Card.Header} eventKey="0">
						      	<Row>
						      		<Col md={2} xs={12} className="cardHeaderLeft">
						      			<h4 className="text-center mt-4">$ 999 </h4>
						      		</Col>
						      		<Col md={8} xs={12} className="serviceName">
						      			<strong>Service Name 1</strong><br />
						      			<span>Tentative Time : 45 mins</span><br />
						      			<small>Small Description of service provided</small>
						      		</Col>
						      		<Col md={2} xs={12} className="text-center mt-4">
						      			<Link to="review-for-booking"><button type="button">Select</button></Link>
						      		</Col>
						      	</Row>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="0">
							    <Col>
							      	<Row className="nextPrevDate">
							      		<span onClick={showAccordin} data-day="dayOne">
							      			Mon<br />
							      			Jun 12
							      		</span>
							      		<span onClick={showAccordin} data-day="dayTwo">
							      			Tus<br />
							      			Jun 13
							      		</span>
							      		<span className="active" onClick={showAccordin} data-day="dayThree">
							      			Wed<br />
							      			Jun 14
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFour">
							      			Thu<br />
							      			Jun 15
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFive">
							      			Fri<br />
							      			Jun 16
							      		</span>
							      	</Row>
							      	<Col md={12} xs={12} className="text-center">
							      		<strong className="selectedDate">Wed June 14</strong><br />
							      		<small>Please select a time period</small>
							      	</Col>
							      	<Row className="timeSlotRadio dayOne text-center">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col className="clearfix"></Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayTwo text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayThree text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFour text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFive text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<br />
							      	<Row className="cardsFooter">

							      	</Row>
						      	</Col>
						    </Accordion.Collapse>
					  	</Card>
					  	<br /><br />
						<Card>
						    <Accordion.Toggle as={Card.Header} eventKey="1">
						      	<Row>
						      		<Col md={2} xs={12} className="cardHeaderLeft">
						      			<h4 className="text-center mt-4">$ 999 </h4>
						      		</Col>
						      		<Col md={8} xs={12} className="serviceName">
						      			<strong>Service Name 1</strong><br />
						      			<span>Tentative Time : 45 mins</span><br />
						      			<small>Small Description of service provided</small>
						      		</Col>
						      		<Col md={2} xs={12} className="text-center mt-4">
						      			<Link to="review-for-booking"><button type="button">Select</button></Link>
						      		</Col>
						      	</Row>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="1">
							    <Col>
							      	<Row className="nextPrevDate">
							      		<span onClick={showAccordin} data-day="dayOne">
							      			Mon<br />
							      			Jun 12
							      		</span>
							      		<span onClick={showAccordin} data-day="dayTwo">
							      			Tus<br />
							      			Jun 13
							      		</span>
							      		<span className="active" onClick={showAccordin} data-day="dayThree">
							      			Wed<br />
							      			Jun 14
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFour">
							      			Thu<br />
							      			Jun 15
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFive">
							      			Fri<br />
							      			Jun 16
							      		</span>
							      	</Row>
							      	<Col md={12} xs={12} className="text-center">
							      		<strong className="selectedDate">Wed June 14</strong><br />
							      		<small>Please select a time period</small>
							      	</Col>
							      	<Row className="timeSlotRadio dayOne text-center">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col className="clearfix"></Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayTwo text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayThree text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFour text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFive text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<br />
							      	<Row className="cardsFooter">

							      	</Row>
						      	</Col>
						    </Accordion.Collapse>
					  	</Card>
					  	<br /><br />
					  	<Card>
						    <Accordion.Toggle as={Card.Header} eventKey="2">
						      	<Row>
						      		<Col md={2} xs={12} className="cardHeaderLeft">
						      			<h4 className="text-center mt-4">$ 999 </h4>
						      		</Col>
						      		<Col md={8} xs={12} className="serviceName">
						      			<strong>Service Name 1</strong><br />
						      			<span>Tentative Time : 45 mins</span><br />
						      			<small>Small Description of service provided</small>
						      		</Col>
						      		<Col md={2} xs={12} className="text-center mt-4">
						      			<Link to="review-for-booking"><button type="button">Select</button></Link>
						      		</Col>
						      	</Row>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="2">
							    <Col>
							      	<Row className="nextPrevDate">
							      		<span onClick={showAccordin} data-day="dayOne">
							      			Mon<br />
							      			Jun 12
							      		</span>
							      		<span onClick={showAccordin} data-day="dayTwo">
							      			Tus<br />
							      			Jun 13
							      		</span>
							      		<span className="active" onClick={showAccordin} data-day="dayThree">
							      			Wed<br />
							      			Jun 14
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFour">
							      			Thu<br />
							      			Jun 15
							      		</span>
							      		<span onClick={showAccordin} data-day="dayFive">
							      			Fri<br />
							      			Jun 16
							      		</span>
							      	</Row>
							      	<Col md={12} xs={12} className="text-center">
							      		<strong className="selectedDate">Wed June 14</strong><br />
							      		<small>Please select a time period</small>
							      	</Col>
							      	<Row className="timeSlotRadio dayOne text-center">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col className="clearfix"></Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayTwo text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayThree text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFour text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<Row className="timeSlotRadio dayFive text-center d-none">
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      		<Col md={2} sm={6} xs={6}>
							      			<label><input type="radio" name="time_slot" /><span></span><span className="timeValue">7:00 PM-10:00PM</span></label><br /><br />
							      		</Col>
							      	</Row>
							      	<br />
							      	<Row className="cardsFooter">

							      	</Row>
						      	</Col>
						    </Accordion.Collapse>
					  	</Card>
					</Accordion>
				</Col>
				<Col className="mt-5">
					<Col className="p-4 reviews">
						<big><big><BsStar /> &nbsp; Reviews</big></big><br />
						<Col>
							<Row>
								<Col className="pl-5 mt-4">
									<Image src={profileIcon} alt="User Icon" /> &nbsp; 
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> 
									<small className="reviewTimeAutherDetail"> &nbsp; Reviewed by username on 01st Jan, 2021 at 1500Hrs</small><br />
									<p className="pt-2 pl-4">Awesome Service</p>
									<Col><hr /></Col> 
								</Col>
							</Row>
							<Row>
								<Col className="pl-5 pt-0">
									<Image src={profileIcon} alt="User Icon" /> &nbsp; 
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> 
									<small className="reviewTimeAutherDetail"> &nbsp; Reviewed by username on 01st Jan, 2021 at 1500Hrs</small><br />
									<p className="pt-2 pl-4">Awesome Service</p>
									<Col><hr /></Col> 
								</Col>
							</Row>
							<Row>
								<Col className="pl-5 pt-2">
									<Image src={profileIcon} alt="User Icon" /> &nbsp; 
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> 
									<small className="reviewTimeAutherDetail"> &nbsp; Reviewed by username on 01st Jan, 2021 at 1500Hrs</small><br />
									<p className="pt-2 pl-4">Awesome Service</p>
								</Col>
							</Row>
						</Col>
					</Col>
				</Col>
			</Col>
			<br /><br /><Footer />
		</Col>

	);

}
export default ServiceDetails;