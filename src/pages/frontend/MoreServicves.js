import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

import HeaderMenu from '../../components/frontend/HeaderMenu';
import FormCheckbox from '../../components/FormCheckbox';
import Footer from '../../components/frontend/Footer';

import { BsSearch } from 'react-icons/bs';
import greenBullet from '../../assets/frontend/images/icons/greenBullet.png';
import salon from '../../assets/frontend/images/icons/salon.svg';
import spa from '../../assets/frontend/images/icons/spa.svg';
import unisexSalon from '../../assets/frontend/images/icons/unisexSalon.svg';
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import filterIcon from '../../assets/frontend/images/icons/filterIcon.png';
import mapIcon from '../../assets/frontend/images/icons/mapIcon.svg';
import { BsFillStarFill, BsChevronUp } from "react-icons/bs";

import '../../assets/frontend/css/moreservices.css';

function MoreServicves(){

	const [ showFilter, setShowFilter ] = useState( false );

	const toggleFilterOption = ()=>{

		setShowFilter( !showFilter );

	}

	useLayoutEffect(() => {

	    window.scrollTo(0, 0);

	});

	return(

		<Col className="overflowXHiddex">
			<Col className="bannerTwo">
				<Col className="moreServiceContainer">
					<HeaderMenu classProps={{bgColor: 'transparent', white: true}} />
					<Col className="text-center">
						<h5><Image src={greenBullet} alt="Bullet Icon" /> &nbsp;999 Slots are currently available Hurry Up!</h5>
						<span className="bannerText">What service do you want ?</span>
					</Col>
					<Col className="servicesHome pl-0">
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
				</Col>
			</Col>
			<Col className="searchSection">
				<Row>
					<Col md={4} sm={6} xs={12} className="falsePadding">
						<Col className="searchContainer">
							<BsSearch />
							<input type="text" name="search" placeholder="Find the service" />
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="searchContainer place">
						<Image src={mapIcon} alt="Map Icon" />
						<input typ="text" name="search" />
						<span className="runcom">Runcorn</span>
						<span className="now">Now</span>
					</Col>
					<Col md={2} sm={6} xs={12} className="excludeUnavailable">
						<FormCheckbox fields={{labelName: 'Excluded unavailable', name: '', value:'', class: ''}} />
					</Col>
					<Col md={3} sm={6} xs={12}>
						<Col className="excludeUnavailable">
							<strong>Sort by : </strong> <Link to="/">Review</Link> | <Link to="/">Response</Link>
						</Col>
					</Col>
				</Row>
				<br />
				<Row>
					<Col md={6} xs={12} className={`slidignLeft ${showFilter?'sliding': ''}`}>
						<Row>
							<Col md={4} xs={5} className="p-0">
								<Col>
									Filters<br />
									<Col className="filters">
										Most Popular
										<span className="float-right">X</span>
									</Col>
								</Col>
							</Col>
							<Col md={5} xs={6} className="p-0">
								<Col>
									<Link to="/">Clear All</Link><br />
									<Col className="filters">
										<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
										<span className="float-right">X</span>
									</Col>
								</Col>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h4>Don’t worry!</h4><br />
									<p>
										We’ll connect you to the best person available now<br /><br /><br /><br />
									</p>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
					<Col md={3} sm={6} xs={12} className="p-0 mt-5">
						<Col className="vendors">
							<Col className="allVendors">
								<Col className="body">
									<Image src={commingSoon} alt="Vendor" />
									<br /><br /><br /><h5>Shop / Provider Name</h5>
									<p>
										Shop / Provider Description<br />
									</p>
									<BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" />
									<br />Available Slots : 950<br />
									Timing : 0800Hrs to 1800Hrs<br /><br />
									<Link to="/">See More ></Link>
								</Col>
								<Col className="footers p-0">
									<Row>
										<Col md={6} xs={6} className="p-0 btnCall">
											<Link to="/">CALL</Link>
										</Col>
										<Col md={6} xs={6} className="p-0">
											<Link to="/service-details">APPOINTMENT</Link>
										</Col>
									</Row>
								</Col>
							</Col>
						</Col>
					</Col>
				</Row>
			</Col>
			<Col className={`filterIcon ${showFilter?'sliding': ''}`}>
				<Image src={filterIcon} alt="Filter Icon" onClick={toggleFilterOption} />
			</Col>
			<Col className={`filterBy ${showFilter?'show':''}`}>
				<Row>
					<Col md={6} xs={6}>
						<span className="heading pl-2">Filters</span>
					</Col>
					<Col md={6} xs={6} className="text-right" onClick={toggleFilterOption}>
						X
					</Col><br />
					<Col md={6} xs={6}>
						<span className="heading pl-2">Ratings</span>
					</Col>
					<Col md={6} xs={6} className="text-right">
						<button type="button">Clear</button> <BsChevronUp />
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="ratting" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels"><BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /></span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="ratting" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels"><BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="empty" /> &nbsp; &amp;above </span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="ratting" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels"><BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> &nbsp; &amp;above </span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="ratting" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels"><BsFillStarFill className="stars" /> <BsFillStarFill className="stars" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> &nbsp; &amp;above </span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="sort" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels"><BsFillStarFill className="stars" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> <BsFillStarFill className="empty" /> &nbsp; &amp;above </span>
						</label>
					</Col>
					<Col md={6} xs={6} className="mt-3">
						<span className="heading pl-2">Sort</span>
					</Col>
					<Col md={6} xs={6} className="text-right mt-3">
						<button type="button">Clear</button> <BsChevronUp />
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="sort" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels">&nbsp;Picked for you (default)</span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="sort" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels">&nbsp;Most Popular</span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="sort" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels">&nbsp;Rating</span>
						</label>
					</Col>
					<Col md={12} xs={12}>
						<label>
							<input type="radio" name="sort" />
							<span className="outerBorder"></span> &nbsp; &nbsp; &nbsp; 
							<span className="labels">&nbsp;Response Time</span>
						</label>
					</Col>
					<Col md={6} xs={6} className="mt-3">
						<span className="heading pl-2">Price</span>
					</Col>
					<Col md={6} xs={6} className="text-right mt-3">
						<button type="button">Clear</button> <BsChevronUp />
					</Col>
					<Col md={6} xs={6} className="pl-4">
						<select name="priceType">
							<option value="min">Min</option>
							<option value="min">Max</option>
						</select>
					</Col>
					<Col md={6} xs={6} className="">
						<input type="text" name="price" value="9999" /><br /><br />
					</Col>
				</Row>
			</Col>
			<br /><br /><br /><br /><Footer />
		</Col>

	);

}
export default MoreServicves;