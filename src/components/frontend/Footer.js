import { Link } from 'react-router-dom';

import { Row, Col, Image } from 'react-bootstrap';

import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import masterCard from '../../assets/frontend/images/masterCard.png';
import paypal from '../../assets/frontend/images/paypal.png';
import visaCard from '../../assets/frontend/images/visaCard.png';

function Footer(){

	return(

		<Col className="footer">
			<Col>
				<Row className="footerContent">
					<Col md={12} sm={12} xs={12}>
						<Link to="/">About Us</Link>
						<Link to="/">Terms &amp; Conditions</Link>
						<Link to="/">Privacy Policy</Link>
						<Link to="/">Blog</Link>
						<Link to="/">Reviews</Link>
						<Link to="/">Near Me</Link>
						<Link to="/">Carrer</Link>
						<Link to="/">Gift Card</Link>
						<Link to="/">About Us</Link>
					</Col>
				</Row>
				<Row className="footerContent">
					<Col>
						<hr />
					</Col>
				</Row>
				<Row className="footerContent">
					<Col md={4} xs={12} className="p-0">
						<Col md={12}>
							<br />Servicing In<br /><br />
						</Col>
						<Col md={12}>
							IND<br /><br />
						</Col>
						<Col md={12}>
							<span>Ahmedabad</span>
							<span>Bangalore</span>
							<span>Pune</span>
							<span>Luckow</span>
							<span>Gujrat</span>
							<span>Haryana</span>
						</Col>
					</Col>
					<Col md={8} xs={12}>
						<br />Address<br /><br />
						<p>
							120, Central Avenue<br />
							Open park, New Delhi-400001<br />
							Call : <span>+91 980000000</span>
						</p>
					</Col>
					<Col md={12}>
						<hr />
					</Col>
					<Col md={12}>
						<Row>
							<Col md={6} xs={9}>
								<span>LOGO</span>
								<span className="small-padding">&copy;</span>
								<Link to="/">book appointment</Link>
								<a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a> 
								<a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a> 
								<a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookSquare size={20} /></a>
							</Col>
							<Col md={6} xs={3} className="text-right">
								<Image src={masterCard} alt="Master Card" /> &nbsp;
								<Image src={paypal} alt="Paypal" /> &nbsp;
								<Image src={visaCard} alt="Visa Card" />
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		</Col>

	);

}
export default Footer;