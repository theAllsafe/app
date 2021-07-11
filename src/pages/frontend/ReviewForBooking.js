import { Link } from 'react-router-dom';
import { useLayoutEffect, useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import loginStat from '../../redux/actions/loginStatusAction';

import HeaderMenu from '../../components/frontend/HeaderMenu';
import CustomButton from '../../components/CustomButton';
import Footer from '../../components/frontend/Footer';

import { BsChevronLeft, BsFillPersonFill, BsFillLockFill, BsFillEnvelopeFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import '../../assets/frontend/css/review-booking.css';

function ReviewForBooking(){

	useLayoutEffect(() => {

	    window.scrollTo(0, 0);

	});
	
	const dispatch = useDispatch();
	
	const [ regFirstStep, setRegFirstStep ] = useState( false );

	const [ regSecondStep, setRegSecondStep ] = useState( false );

	const [ showBackendErrorMsg, setShowBackendErrorMsg ] = useState( false );

	const [ userExist, setUserExist ] = useState( false );
	
	const [ isLoading, setIsLoading ] = useState( false );
	
	const [ updateCustomerStatus, setUpdateCustomerStatus ] = useState( false );
	
	const [ wentWrong, setWentWrong] = useState( false );
	
	const [ wrongCredentials, setWrongCredentials] = useState( false );
	
	const [ customerDetails, setCustomerDetails ] = useState( { phone_number: '',communication_email: '', fullname: '', street_no: '', street_name: '', suburb: '', state: '', pincode: '' } )
	
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
	
	const customerDetailsInitialValues = {
		
		phone_number: customerDetails.phone_number?customerDetails.phone_number:'',
		communication_email: customerDetails.communication_email?customerDetails.communication_email:'',
		fullname: customerDetails.fullname?customerDetails.fullname:'',
		street_no: customerDetails.street_no?customerDetails.street_no:'',
		street_name: customerDetails.street_name?customerDetails.street_name:'',
		suburb: customerDetails.suburb?customerDetails.suburb:'',
		state: customerDetails.state?customerDetails.state:'',
		pincode: customerDetails.pincode?customerDetails.pincode:''
		
	}
	
	const customerDetailsValidationSchema = Yup.object({
		
		phone_number: Yup.number( 'Please enter correct phone number' ).required( 'Please enter your phone number' ),
		communication_email: Yup.string().email( 'Please enter a valid email' ),
		fullname: Yup.string().required( 'Please enter your full name' ),
		street_no: Yup.string().required( 'Please enter street number or house number' ),
		street_name: Yup.string().required( 'Please enter street name' ),
		suburb: Yup.string().required( 'Please enter suburb' ),
		state: Yup.string().required( 'Please enter your state name' ),
		pincode: Yup.string().required( 'Please enter pincode' )
		
	})
	const loginInitialValue = {
		
		'username': '',
		'password': ''
		
	}
	const loginValidationScheme = Yup.object({
		
		username: Yup.string().required( 'Please enter your username' ),
		password: Yup.string().required( 'Please enter your password' ),
		
	})
	const paymentType=(e)=>{

		if( e.target.value === 'partial' ){

			document.querySelector( '.remainingLabel' ).classList.remove( 'd-none' );

			document.querySelector( '.fullPayment' ).classList.add( 'd-none' );

			document.querySelector( '.partialAmount' ).classList.remove( 'd-none' );

			document.querySelector( '.remainingAmount' ).classList.remove( 'd-none' );

		}
		else{

			document.querySelector( '.remainingLabel' ).classList.add( 'd-none' );

			document.querySelector( '.fullPayment' ).classList.remove( 'd-none' );

			document.querySelector( '.partialAmount' ).classList.add( 'd-none' );

			document.querySelector( '.remainingAmount' ).classList.add( 'd-none' );

		}

	}
	const gotoSignup = ()=>{

		setRegFirstStep(!regFirstStep);

	}
	const gotoLogin = ()=>{

		document.querySelector( '.loginFrom' ).classList.remove( 'd-none' );

		document.querySelector( '.signFrom' ).classList.add( 'd-none' );

		document.querySelector( '.forgotPassword' ).classList.add( 'd-none' );

	}
	const gotoForgotFrom = ()=>{

		document.querySelector( '.loginFrom' ).classList.add( 'd-none' );

		document.querySelector( '.forgotPassword' ).classList.remove( 'd-none' );

	}
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
					setRegSecondStep( true )
					dispatch(loginStat(true));
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
	const submitCutomerDetails =(e)=>{
		setIsLoading(true)
		axios.post( '/customer/save-customerdetails', e).then(data=>{
			if(data.data.updateStatus){
				setUpdateCustomerStatus(true)
			}
			else{
				setWentWrong(true)
			}
			setIsLoading(false)
		}).catch(err=>{
			setIsLoading(false)
			setUpdateCustomerStatus(false)
			console.log(err)
		});
		
	}
	const loginHandler = (e)=>{
		setIsLoading(true)
		axios.post( '/customer/login', e).then(data=>{
			if(data.data.loginStatus){
				setWrongCredentials( false )
				setRegSecondStep(true)
				setRegFirstStep(true)
				setWentWrong(false)
				dispatch(loginStat(true))
			}
			else{
				setWrongCredentials( true )
				setRegSecondStep(false)
				setWentWrong(true)
			}
			setIsLoading(false)
		}).catch(err=>{
			setIsLoading(false)
			console.log(err)
		});
	}
	useEffect(()=>{
		axios.get('/customer/isloggedIn').then(data=>{
			if(data.data.isLoggedIn)
				setRegSecondStep( true )
			setCustomerDetails( data.data.customerData.userData )
		}).catch(
			err=>console.log(err)
		)
		
	}, [regSecondStep]);
	
	return(
		
		<Col className="overflowXHiddex">
			<Col className="reviewBookingHeader">
				<Col>
					<HeaderMenu classProps={{bgColor: 'blue', white: true}} />
				</Col>
			</Col>
			<Col className="reviewHeading">
				<h3 className="text-center mt-4 mb-4">REVIEW YOUR BOOKING</h3>
			</Col>
			<Col className="reviewBooking">
				<Col>
					<Link to="/service-details" className="backToPrev">
						<BsChevronLeft /> &nbsp; 
						Back to Time &amp; Date
					</Link><br /><br />
					<Row>
						<Col md={6} xs={12}>
							<Col className="reviewDetails">
								<h4 className="text-center">Your Appointment Details</h4><br />
								<Row>
									<Col md="6" xs="6" className="text-right">
										Expert :<br /><br />
										Service Name:<br /><br />
										Date :<br /><br />
										Preferred Time Slot :<br /><br />
										Charges :<br /><br />
										Payment :<br /><br /><br />
										Charge Payable :<br /><br />
										<span className="remainingLabel">Remaining Amount :<br /><br /></span>
									</Col>
									<Col md="6" xs="6" className="text-left">
										Shop / Provider Name<br /><br />
										Service Name 1<br /><br />
										Jun 15, 2021<br /><br />
										12:00 PM - 1:00 PM<br /><br />
										<span className="price">$ 999</span><br /><br />
										<label className="radio">
											<input type="radio" name="payemtnType" value="partial" checked onClick={paymentType} onChange={(e)=>console.log(e)} />
											 &nbsp; &nbsp; &nbsp; <span className="label">Partial Ammount*</span>
										</label><br />
										<label className="radio mb-3">
											<input type="radio" name="payemtnType" value="full" onClick={paymentType} onChange={(e)=>console.log(e)} />
											 &nbsp; &nbsp; &nbsp; <span className="label">Full Ammount</span>
										</label><br />
										<span className="price fullPayment d-none">$ 999<br /><br /></span>
										<span className="price partialAmount">$ 99<br /><br /></span>
										<span className="price remainingAmount">$ 900<br /><br /></span>
									</Col>
									<Col md={12} xs={12} className="text-center">
										<br /><br /><br /><br /><small><strong>* Remaining amount will be paid to the vendor the vendors will confirm the service completion on their portal after which customers will pay either cash or online .</strong></small><br /><br />
									</Col>
									<Col className="reviewFooter">
										<Col md={{span: 8, offset: 2}} xs={12}>
											<Col>
												<Formik>
													<Form>
														<Row>
															<Col md={9} xs={9} className="fieldContainer">
																<Field type='text' name='coupon' value='' placeholder='Have a Coupon ?' className="mb-3" />
															</Col>
															<Col md={3} xs={3}>
																<CustomButton btn={{type: 'submit', name: '', class: 'btnYellow full', btnText: 'Apply'}} />
															</Col>
														</Row>
													</Form>
												</Formik>
											</Col>
										</Col>
									</Col>
								</Row>
							</Col>
						</Col>
						<Col md={6} xs={12}>
							<Col className="personalDetails">
								<Col className={`loginFrom ${regSecondStep || regFirstStep?'d-none':''}`}>
									<h4 className="text-center">Login - This'll be quick</h4>
									<br /><br />
									{wrongCredentials?(<Col className="text-danger pl-4"><small><i>Wrong username / email and password combination</i></small></Col>):''}
									<Formik onSubmit={loginHandler} initialValues={loginInitialValue} validationSchema={loginValidationScheme}>
										
										<Form>
											<Col className="pr-0">
												<Col className="pr-0">
													<Col md={12} xs={12} className="fieldContainer">
														<BsFillPersonFill className="prepend" />
														<Field type="text" name="username" placeholder="Username / Email" />
													</Col>
													<Col className="text-danger pt-1"><small><i><ErrorMessage name="username" /></i></small></Col>
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
													<Col className="text-danger pt-1"><small><i><ErrorMessage name="password" /></i></small></Col>
												</Col>
											</Col>
											<Col className="pr-2 mt-3">
												<Col className="pr-0">
													<Col md={12} xs={12} className="text-right">
														<button type="submit" className="btnLink" onClick={gotoForgotFrom}>Forgot Username? Password ?</button>
													</Col>
												</Col>
											</Col>
											<Col md={12} className="loginSignUp text-center">
												<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
												{!isLoading?(<button type="submit" className="btnPayment mt-5">LOGIN NOW</button>):'Processing ...'}
												<br /><br />Have an account ? <button type="button" className="btnLink" onClick={gotoSignup}>Sign Up</button>
											</Col>
										</Form>
									</Formik>
								</Col>
								<Col className={`signFrom ${(regSecondStep || !regFirstStep)?'d-none':''}`}>
									<h4 className="text-center">Sign Up - This'll be quick</h4>
									<br /><br />
									<Formik onSubmit={signupOneHandler} initialValues={signupInitialsValues} validationSchema={signupValidationSchema}>
										<Form>
											{showBackendErrorMsg?(<Col className="text-danger"><small><i>Something went wrong !</i></small></Col>):''}
											{userExist?(<Col className="text-danger"><small><i>The username or email already in used</i></small></Col>):''}
											<Col className="pr-0">
												<Col className="pr-0">
													<Col md={12} xs={12} className="fieldContainer">
														<BsFillPersonFill className="prepend" />
														<Field type="text" name="username" placeholder="Username" />
													</Col>
												</Col>
												<Col className="text-danger pt-1"><small><i><ErrorMessage name="username" /></i></small></Col>
											</Col>
											<Col className="pr-0">
												<Col className="pr-0">
													<Col md={12} xs={12} className="fieldContainer">
														<BsFillLockFill className="prepend" />
														<Field type="password" name="password" className="password" placeholder="Password" />
														<BsFillEyeFill className="append textIcon" onClick={changeToText} />
														<BsFillEyeSlashFill className="append passwordIcon d-none" onClick={changeToPassword} />
													</Col>
												</Col>
												<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="password" /></i></small></Col>
											</Col>
											<Col className="pr-0">
												<Col className="pr-0">
													<Col md={12} xs={12} className="fieldContainer">
														<BsFillEnvelopeFill className="prepend" />
														<Field type="email" name="email" placeholder="Email" />
													</Col>
												</Col>
												<Col className="text-danger pt-1 pl-0"><small><i><ErrorMessage name="email" /></i></small></Col>
											</Col>
											<Col md={12} xs={12} className="termsAndConditions mt-4">
												<label className="checkbox">
													<Field type="checkbox" name="terms" className="termAndCondition" />
													 &nbsp; &nbsp; &nbsp; &nbsp; <span className="label">By signing up you are agreeing to <button type="button" className="btnLink">Term & Conditions</button></span>
												</label>
												<Col className="termsAndConditionsMsg text-danger pt-1 d-none"><small><i>Please accept terms &amp; conditions</i></small></Col>
											</Col>
											<Col md={12} className="loginSignUp text-center">
												<br /><br /><br /><br /><br /><br /><br />
												{!isLoading?(<button type="submit" className="btnPayment signUpOne mt-5">Sign Up</button>):'Processing...'}
												<br /><br />Have an account ? <button type="button" onClick={gotoLogin} className="btnLink">Login Now</button>
											</Col>
										</Form>
									</Formik>
								</Col>
								<Col className="forgotPassword d-none">
									<h4 className="text-center">Don't worry ! Reset your password !</h4>
									<br /><br />
									<Formik>
										<Form>
											<Col className="pr-0">
												<Col className="pr-0">
													<Col md={12} xs={12} className="fieldContainer">
														<BsFillEnvelopeFill className="prepend" />
														<Field type="email" name="search" placeholder="Email" />
													</Col>
												</Col>
											</Col>
											<Col md={12} className="loginSignUp text-center">
												<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
												<button type="button" className="btnPayment mt-5">Send Link</button>
												<br /><br />Have password ? <button type="button" onClick={gotoLogin} className="btnLink">Login Now</button>
											</Col>
										</Form>
									</Formik>
								</Col>
								<Col className={`addressFrom ${(regSecondStep)?'':'d-none'}`}>
									<h4 className="text-center">Please provide us with your contact details</h4>
									<p className="text-center">
										So we may keep you updated about your appointment's status
									</p><br />
									<Formik enableReinitialize onSubmit={submitCutomerDetails} initialValues={customerDetailsInitialValues} validationSchema={customerDetailsValidationSchema}>
										{( formik )=>(
											<Form>
												{updateCustomerStatus?(<Col className="text-success pl-0"><small><i>Customer details updated</i></small></Col>):null}
												{wentWrong?(<Col className="text-danger pl-0"><small><i>Someting went wrong</i></small></Col>):null}
												<label className="fieldContailer">
													<Field type='number' name='phone_number' placeholder='Phone Number' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="phone_number" /></i></small></Col>
												<label className="fieldContailer">
													<Field type='email' name='communication_email' placeholder='Email' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="communication_email" /></i></small></Col>
												<small><i className="smallItalic">Important communications will be sent here</i></small>
												<label className="fieldContailer">
													<Field type='text' name='fullname' placeholder='Full Name' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="fullname" /></i></small></Col>
												<label className="fieldContailer">
													<Field type='text' name='street_no' placeholder='H.No./ Unit No./ Street No.' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="street_no" /></i></small></Col>
												<label className="fieldContailer">
													<Field type='text' name='street_name' placeholder='Street Name' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="street_name" /></i></small></Col>
												<label className="fieldContailer">
													<Field  type='text' name='suburb' placeholder='Suburb' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="suburb" /></i></small></Col>
												<label className="fieldContailer">
													<Field type='text' name='state' placeholder='State' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="state" /></i></small></Col>
												<label className="fieldContailer">
													<Field type='number' name='pincode' placeholder='Pincode' />
												</label>
												<Col className="text-danger pl-0"><small><i><ErrorMessage name="pincode" /></i></small></Col>
												<Row className="text-center">
													<Col>
													{!isLoading?
														(<button type="submit" disabled={(( !customerDetails.phone_number ) && (!formik.dirty || Object.keys(formik.errors).length>0))?true:false} className="btnPayment mt-2">Continue To Payment</button>)
														:'Processing...'
													}
													<br /><br />
													</Col>
												</Row>
											</Form>
										)}
									</Formik>
								</Col>
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
			<br /><br /><br />
			<Footer />
		</Col>

	);

}
export default ReviewForBooking;