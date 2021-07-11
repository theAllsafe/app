import { useState, useEffect, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import showMenu from '../../redux/actions/menuAction';

import { Col, Image } from 'react-bootstrap';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import '../../assets/backend/css/customer.css';

function LeftSidebarVendor(){
	
	useLayoutEffect(()=>{
		window.scroll(0,0)
	},[]);

	const [ showSubmenu, setShowmenu ] = useState( false );

	const [ submenuIndicator, setSubmenuIndicator ] = useState( false );

	const [ showSubmenuTwo, setShowmenuTwo ] = useState( false );

	const [ submenuIndicatorTwo, setSubmenuIndicatorTwo ] = useState( false );

	const showSubmenuHandler = ( e )=>{

		e.preventDefault();

		setShowmenu( !showSubmenu );
		
		setSubmenuIndicator( !submenuIndicator );

	}
	const showSubmenuHandlerTwo = ( e )=>{

		e.preventDefault();

		setShowmenuTwo( !showSubmenuTwo );
		
		setSubmenuIndicatorTwo( !submenuIndicatorTwo );

	}

	const dispatch = useDispatch();

	useEffect(()=>{

		dispatch(showMenu(false));

	},[dispatch]);

	return(
		<Col className="leftSidebar p-0">
			<span className="float-right m-4 closeIcon d-none">x<br /><br /><br /></span>
			<Col className="text-center">
				<Image src={ commingSoon } alt="Profile Pic" /><br /><br />
				<strong>Service Provider Name</strong><br />
				Service Name
			</Col>
			<Col className="leftMenu p-0">
				<ul>
					<li>
						<NavLink activeClassName="active" to="/vendor-dashboard"><BsChevronLeft /> &nbsp; &nbsp; Dashboard</NavLink>
					</li>
					<li className="">
						<NavLink activeClassName="active" to="/vendor-appointment"><BsChevronLeft /> &nbsp; &nbsp; Appointment</NavLink>
					</li>
					<li className={`hasSubmenu ${showSubmenu?'show':''}`}>
						<NavLink to="vendor" onClick={showSubmenuHandler}><BsChevronLeft /> &nbsp; &nbsp; Profile <BsChevronRight className={`float-right ${submenuIndicator?'roated':''}`} /></NavLink>
						<ul>
							<li><NavLink to="/vendor-my-profile"> &nbsp; &nbsp; My Profile</NavLink></li>
							<li><NavLink to="/vendor-company-profile"> &nbsp; &nbsp; Company Profile</NavLink></li>
						</ul>
					</li>
					<li className={`hasSubmenu ${showSubmenuTwo?'show':''}`}>
						<NavLink to="vendor" onClick={showSubmenuHandlerTwo}><BsChevronLeft /> &nbsp; &nbsp; Service Management <BsChevronRight className={`float-right ${submenuIndicatorTwo?'roated':''}`} /></NavLink>
						<ul>
							<li><NavLink to="/vendor-service-details"> &nbsp; &nbsp; Service Details</NavLink></li>
							<li><NavLink to="/vendor-edit-service"> &nbsp; &nbsp; Edit Service</NavLink></li>
						</ul>
					</li>
					<li className="last">
						<NavLink activeClassName="active" to="/vendor-billing"><BsChevronLeft /> &nbsp; &nbsp; Billing</NavLink>
					</li>
				</ul>
				<br /><br />
			</Col>
		</Col>

	);

}
export default LeftSidebarVendor;