import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import HeaderMenu from '../../components/frontend/HeaderMenu';
import FormFiled from '../../components/FormFiled';
import CustomButton from '../../components/CustomButton';

import '../../assets/frontend/css/auth.css';

function ResetPassword(){

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
				<form>
					<Col md={{span: 6, offset: 3}} xs={12}>
						<Col className="authBody">
							<h4>Reset Password</h4>
							<Col className="p-0">
								<hr />
							</Col>
							<FormFiled fields={{labelName: '', type: 'password', name: 'email', value: '', placeholder: 'Enter new password'}} />
							<FormFiled fields={{labelName: '', type: 'password', name: 'password', value: '', placeholder: 'Reenter password'}} />
							<Row>
								<Col md={6} xs={12} className="text-right">
									Have password ? <Link to="/login">Login</Link>
								</Col>
								<Col md={12}>
									<br /><br /><CustomButton btn={{type: 'submit', name: '', class: 'btnYellow full', btnText: 'Update Password'}} />
								</Col>
							</Row>
						</Col>
					</Col>
				</form>
				<p className="text-center mt-3"><small>All rights reserved @ <Link to="/">appointment.com</Link> &copy; {year}</small></p>
			</Col>
		</Col>

	);

}
export default ResetPassword;