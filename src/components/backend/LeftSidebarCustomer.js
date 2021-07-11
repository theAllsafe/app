import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import showMenu from '../../redux/actions/menuAction';

import { BsChevronLeft } from "react-icons/bs";
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import '../../assets/backend/css/customer.css';

function LeftSidebarCustomer(){
	
	useLayoutEffect(()=>{
		window.scroll(0,0)
	},[]);
	
	const dispatch = useDispatch();

	useEffect(()=>{

		dispatch(showMenu(false));
			

	},[dispatch]);

	return(

		<Col className="leftSidebar p-0">
			<span className="float-right m-4 closeIcon d-none">x<br /><br /><br /></span>
			<Col className="text-center">
				<Image src={ commingSoon } alt="Profile Pic" /><br /><br />
				<strong>Customer Name</strong><br />
				Profession
			</Col>
			<Col className="leftMenu p-0">
				<ul>
					<li>
						<NavLink activeClassName="active" to="/customer-dashboard"><BsChevronLeft /> &nbsp; &nbsp; Dashboard</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/customer-appointment"><BsChevronLeft /> &nbsp; &nbsp; Appointment</NavLink>
					</li>
                    <li>
						<NavLink activeClassName="active" to="/customer-profile"><BsChevronLeft /> &nbsp; &nbsp; Profile</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/customer-billing"><BsChevronLeft /> &nbsp; &nbsp; Billing</NavLink>
					</li>
				</ul>
				<br /><br />
			</Col>
		</Col>

	);

}
export default LeftSidebarCustomer;