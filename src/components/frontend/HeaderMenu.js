import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Image  } from 'react-bootstrap';

import menuIcon from '../../assets/frontend/images/icons/menuIcon.svg';
import menuIconWhite from '../../assets/frontend/images/icons/menuIconWhite.svg';
import profileIcon from '../../assets/frontend/images/icons/profileIcon.svg';
import profileIconWhite from '../../assets/frontend/images/icons/profileIconWhite.png';
import '../../App.css';

function HeaderMenu(props){

	const [ showMenu, setShowMenu ] = useState( false );

	const showBusinessAccountLink = ()=>{

		setShowMenu( !showMenu );

	}

	return(
		
		<nav className={props.classProps.bgColor}>
			<Row>
				<Col md={6} xs={6} className="p-0">
					<Row>
						<Col md={1} xs={2} className="menu-icon">
							{props.classProps.white?<Image src={menuIconWhite} onClick={showBusinessAccountLink} alt="Menu Icon" />:<Image src={menuIcon} onClick={showBusinessAccountLink} alt="Menu Icon" />}
						</Col>
						<Col md={11} xs={10}>
							<Link to="/">{props.classProps.white?<h2 className="whiteLogo white">LOGO</h2>:<h2>LOGO</h2>}</Link>
						</Col>
					</Row>
				</Col>
				<Col md={6} xs={6} className={`text-right headerProfile ${props.classProps.white?'white':''}`}>
					{props.classProps.white?<Image src={profileIconWhite} alt="User Icon" />:<Image src={profileIcon} alt="User Icon" width="39" />}
					<span className="headerAccount">
						MY ACCOUNT
						<span className="headerLink">
							<Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
						</span>
					</span>
				</Col>
			</Row>
			<Col className={`businessAccountLink p-0 ${showMenu?'show':''}`}>
				<Col className="header p-3 text-center">
					<Link to="/">Sign In</Link>
					<span className="float-right" onClick={showBusinessAccountLink}>X</span>
				</Col>
				<Col className="body">
					<br /><Link to="/create-business-account-step-one">Create a business account</Link><br />
					<Col className="p-0 showInMobile">
						<Link to="/">My account</Link><br />
						<Link to="/login">Login</Link><br />
						<Link to="/signup">Signup</Link><br />
					</Col>
				</Col>
			</Col>
		</nav>

	);

}
export default HeaderMenu;