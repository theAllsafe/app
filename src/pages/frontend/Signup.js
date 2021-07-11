import { useState, useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import loginStat from '../../redux/actions/loginStatusAction';

import { BsFillPersonFill, BsFillLockFill, BsFillEnvelopeFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import HeaderMenu from '../../components/frontend/HeaderMenu';

import '../../assets/frontend/css/auth.css';

function Signup(){
	
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
	const [ showBackendErrorMsg, setShowBackendErrorMsg ] = useState( false );

	const [ userExist, setUserExist ] = useState( false );
	
	const [ isLoading, setIsLoading ] = useState( false );
	
	const history = useHistory();
	
	const signupInitialsValues ={
		
		'username': '',
		'password': '',
		'email':'',
		'terms': false
		
	}
	const signupValidationSchema = Yup.object({
		
		username: Yup.string().required( 'Please enter your username' ),
		password: Yup.string().required( 'Please enter your password' ).min(6),
		email: Yup.string().required( 'Please enter your email' ).email( 'Please enter a valid email' ),
		terms: Yup.string().required( 'Please accept terms and conditions' )
		
	})
	const signupOneHandler = e =>{
	
		document.querySelector( '.termsAndConditionsMsg' ).classList.add( 'd-none' );
		if(e.terms){
			document.querySelector( '.termsAndConditionsMsg' ).classList.add( 'd-none' );
		}
		else{
			document.querySelector( '.termsAndConditionsMsg' ).classList.remove( 'd-none' );
		}
		
		setUserExist(false)
		setShowBackendErrorMsg(false)
		
		if(e.terms){
			setIsLoading(true)
			axios.post('/customer/signup', e ).then(data=>{
				if(!data.data.validationError && !data.data.userExist){
					dispatch(loginStat(true));
					history.push( '/customer-dashboard' )
				}
				if(data.data.validationError){
					setShowBackendErrorMsg( true )
				}
				if(data.data.userExist){
					setUserExist(true)
				}
				setIsLoading(false)
			}).catch(error=>{
				setIsLoading(false)
				console.log(error)
			});
		}

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
				<h1 className="text-center">Signup</h1>
				<Formik onSubmit={signupOneHandler} initialValues={signupInitialsValues} validationSchema={signupValidationSchema}>
					<Form>
						<Col md={{span: 6, offset: 3}} xs={12}>
							<Col className="authBody">
								<h4>General Signup</h4>
								<Col className="pl-0 pr-0">
									<hr />
								</Col>
								{showBackendErrorMsg?(<Col className="text-danger"><small><i>Something went wrong !</i></small></Col>):''}
								{userExist?(<Col className="text-danger"><small><i>The username or email already in used</i></small></Col>):''}
								<Col className="pr-0">
									<Col className="pr-0">
										<Col md={12} xs={12} className="fieldContainer">
											<BsFillPersonFill className="prepend" />
											<Field type="text" name="username" placeholder="Username" />
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
											<BsFillEyeSlashFill className="append passwordIcon d-none" onClick={changeToPassword} />
										</Col>
										<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="password" /></i></small></Col>
									</Col>
								</Col>
								<Col className="pr-0">
									<Col className="pr-0">
										<Col md={12} xs={12} className="fieldContainer">
											<BsFillEnvelopeFill className="prepend" />
											<Field type="email" name="email" placeholder="Email" />
										</Col>
										<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="email" /></i></small></Col>
									</Col>
								</Col>
								<Col md={12} xs={12} className="termsAndConditions mt-4">
									<label className="checkbox">
										<Field type="checkbox" name="terms" />
										 &nbsp; &nbsp; &nbsp; &nbsp; <span className="label">By signing up you are agreeing to <Link to="terms-and-conditions">Term & Conditions</Link></span>
									</label>
									<Col className="termsAndConditionsMsg text-danger pt-1 d-none"><small><i>Please accept terms &amp; conditions</i></small></Col>
								</Col>
								<Col md={12} className="loginSignUp text-center">
									<br /><br /><br /><br /><br /><br /><br /><br /><br />
									{!isLoading?(<button type="submit" className="btnPayment mt-5">Sign Up</button>):'Processing..'}
									<br /><br />Have an account ? <Link to="/login">Login Now</Link>
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
export default Signup;