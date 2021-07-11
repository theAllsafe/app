import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import showMenu from '../../redux/actions/menuAction';

import { BsChevronDown } from "react-icons/bs";
import profileIconWhite from '../../assets/frontend/images/icons/profileIconWhite.png';
import menuIconWhite from '../../assets/frontend/images/icons/menuIconWhite.svg';
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import '../../assets/backend/css/customer.css';

function HeaderCustomerVenrdor(){

	const dispatch = useDispatch();

	const showmenu = useSelector(state => state.showsideMenu.showmenu)

	const toggleSidebar = ()=>{
		
		dispatch(showMenu(!showmenu))

	}

	return(

		<>
			<Col className="customerDashboardHeader">
				<Col className="headerDashboard">
					<Row>
						<Col md={4} xs={6} >
							<Image src={menuIconWhite} className="menuIcon" alt="Menu Icon" onClick={toggleSidebar} /> &nbsp; 
							<span className="logo">LOGO</span>
						</Col>
						<Col md="8" xs={6} className="text-right">
							<Image src={profileIconWhite} className="profilePic" alt="Profile Icon" />
							 &nbsp; &nbsp; <span>username@xyz.com</span>
						</Col>
					</Row>
				</Col>
			</Col>
			<Col className="breadCrumb">
				<Col>
					<Row>
						<Col md={6} xs={8}>
							<Link to="/customer/dashboard">Home</Link> &nbsp; / &nbsp; Dashboard<br />
							<h4>Dashboard</h4>
						</Col>
						<Col md={6} xs={4} className="text-right">
							<Image src={ commingSoon } alt="Navigation Icon" /> &nbsp; <BsChevronDown />
						</Col>
					</Row>
				</Col>
			</Col>
		</>

	);

}
export default HeaderCustomerVenrdor;