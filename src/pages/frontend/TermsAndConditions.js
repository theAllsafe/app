import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import HeaderMenu from '../../components/frontend/HeaderMenu';

function TermsAndConditions(){

	const year = new Date().getFullYear();

	return(

		<Col className="overflowXHiddex">
			<Col className="authHeader">
				<Col>
					<HeaderMenu classProps={{bgColor: 'blue', white: true}} />
				</Col>
			</Col>
			<br /><br />
			<Col className="authContainer">
				<h1 className="text-center">LOGO</h1>
					<Col md={{span: 8, offset: 2}} xs={12}>
						<Col className="authBody">
							<big><strong>Terms &amp; Conditions</strong></big>
							<Link to="/signup" className="float-right">Back to signup</Link>
							<Col className="p-0">
								<hr />
							</Col>
							<p className="mt-4">
								Lorem ipsum
							</p>
						</Col>
					</Col>
				<p className="text-center mt-3"><small>All rights reserved @ <Link to="/">appointment.com</Link> &copy; {year}</small></p>
			</Col>
		</Col>

	);

}
export default TermsAndConditions;