import { useState, useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Col } from 'react-bootstrap';
import axios from 'axios';
import loginStat from '../../redux/actions/loginStatusAction';

import { BsFillPersonFill, BsFillLockFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import HeaderMenu from '../../components/frontend/HeaderMenu';

import '../../assets/frontend/css/auth.css';

function Login(){
	
	useLayoutEffect(()=>{
		window.scroll(0,0)
	},[]);
	
	const dispatch = useDispatch();
	
	const year = new Date().getFullYear();

	const changeToText = (e)=>{
		
		e.target.parentNode.querySelector( '.password' ).setAttribute( 'type', 'text' );

		e.target.parentNode.querySelector( '.textIcon' ).classList.add( 'd-none' );

		e.target.parentNode.querySelector( '.passwordIcon' ).classList.remove( 'd-none' );

	}
	const changeToPassword = (e)=>{

		e.target.parentNode.querySelector( '.password' ).setAttribute( 'type', 'password' );

		e.target.parentNode.querySelector( '.textIcon' ).classList.remove( 'd-none' );

		e.target.parentNode.querySelector( '.passwordIcon' ).classList.add( 'd-none' );

	}
	
	const history = useHistory();
	
	const [ showBackendErrorMsg, setShowBackendErrorMsg ] = useState( false );
	
	const [ isLoading, setIsLoading ] = useState( false );
	
	const [ wrongCredentials, setWrongCredentials ] = useState( false );
	
	const loginInitialValue = {
		
		'username': '',
		'password': ''
		
	}
	const loginValidationScheme = Yup.object({
		
		username: Yup.string().required( 'Please enter your username' ),
		password: Yup.string().required( 'Please enter your password' ),
		
	})
	
	const loginHandler = (e)=>{
		setIsLoading(true)
		axios.post( '/customer/login', e).then(data=>{
			//const userRole = data.data.customerData.userData.user_role
			if(data.data.loginStatus){
				setWrongCredentials( false )
				setShowBackendErrorMsg(false)
				dispatch(loginStat(true));
				history.push( '/customer-dashboard' )
			}
			else{
				setWrongCredentials( true )
				setShowBackendErrorMsg(true)
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
				<h1 className="text-center">LOGIN</h1>
				<Formik onSubmit={loginHandler} initialValues={loginInitialValue} validationSchema={loginValidationScheme}>
					<Form>
						<Col md={{span: 6, offset: 3}} xs={12}>
							<Col className="authBody">
								<h4>General Login</h4>
								<Col className="pl-0 pr-0">
									<hr />
								</Col>
								{wrongCredentials?(<Col className="text-danger pl-4"><small><i>Wrong username / email and password combination</i></small></Col>):''}
								{(showBackendErrorMsg && !wrongCredentials)?(<Col className="text-danger pl-4"><small><i>Sorry, something went wrong !</i></small></Col>):''}
								<Col className="pr-0">
									<Col className="pr-0">
										<Col md={12} xs={12} className="fieldContainer">
											<BsFillPersonFill className="prepend" />
											<Field type="text" name="username" placeholder="Username / Email" />
										</Col>
										<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="username" /></i></small></Col>
									</Col>
								</Col>
								<Col className="pr-0">
									<Col className="pr-0">
										<Col md={12} xs={12} className="fieldContainer">
											<BsFillLockFill className="prepend" />
											<Field type="password" name="password" className="password" placeholder="Password" />
											<BsFillEyeFill className="append textIcon" onClick={changeToText} />
											<BsFillEyeSlashFill className="append passwordIcon d-none" onClick={changeToPassword}  />
										</Col>
										<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="password" /></i></small></Col>
									</Col>
								</Col>
								<Col className="pr-2 mt-3">
									<Col className="pr-0">
										<Col md={12} xs={12} className="text-right">
											<Link to="/forgot-password">Forgot Username? Password ?</Link>
										</Col>
									</Col>
								</Col>
								<Col md={12} className="loginSignUp text-center">
									<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
									{!isLoading?(<button type="submit" className="btnPayment mt-5">LOGIN NOW</button>):'Processing...'}
									<br /><br />Have an account ? <Link to="/signup">Sign Up</Link>
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
export default Login;