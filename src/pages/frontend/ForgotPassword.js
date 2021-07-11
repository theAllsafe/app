import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { BsFillEnvelopeFill } from "react-icons/bs";
import HeaderMenu from '../../components/frontend/HeaderMenu';

import '../../assets/frontend/css/auth.css';

function ForgotPassword(){

	const year = new Date().getFullYear();
	
	const [ isLoading, setIsLoading ] = useState( false );
	
	const [ isCustomerExisit, setIsCustomerExisit ] = useState(false)
	
	const [ showBackendErrorMsg, setShowBackendErrorMsg ] = useState("");
	
	const forgotPassInitialValue = {
		
		'email': '',
		
	}
	
	const forgotPassValidationScheme = Yup.object({
		
		email: Yup.string().required( 'Please enter your register email!' ),
				
	})
	
	const sendLinkHandler = (e)=>{
		setIsLoading(true)
		axios.post( '/customer/forgot-password', e).then(data=>{
			if(data.data.msg){
				setShowBackendErrorMsg(data.data.msg)
				setIsCustomerExisit(data.data.isCustomerExisit)
			}
			setIsLoading(false)
		}).catch(err=>{
			setIsLoading(false)
			console.log(err)
		});
	}

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
				<Formik onSubmit={sendLinkHandler} initialValues={forgotPassInitialValue} validationSchema={forgotPassValidationScheme}>
					<Form>
						<Col md={{span: 6, offset: 3}} xs={12}>
							<Col className="authBody">
								<big><strong>Forgot Password</strong></big>
								<Col className="p-0">
									<hr />
								</Col>
								{showBackendErrorMsg?(<Col className={`pl-4 ${isCustomerExisit?'text-success':'text-danger'}`}><small><i>{showBackendErrorMsg}</i></small></Col>):''}
								<Col className="pr-0 pl-3">
									<Col className="pr-0">
										<Col md={12} xs={12} className="fieldContainer">
											<BsFillEnvelopeFill className="prepend" />
											<Field type="email" name="email" placeholder="Email" />
										</Col>
										<Col className="text-danger pl-0 mt-2"><small><i><ErrorMessage name="email" /></i></small></Col>
									</Col>
								</Col>
								<Col md={12} className="loginSignUp text-center">
									<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
									{!isLoading?(<button type="submit" className="btnPayment mt-5">Send Link</button>):'Processing...'}
									<br /><br />Have password ? <Link to="/login">Login Now</Link>
								</Col>
							</Col>
						</Col>
					</Form>
				</Formik>
				<p className="text-center mt-3"><small>All rights reserved @ <Link to="/">appointment.com</Link> &copy; {year}</small></p>
			</Col>
		</Col>

	);

}
export default ForgotPassword;