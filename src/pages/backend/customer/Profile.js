import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarCustomer';

import defaultProfilePic from '../../../assets/frontend/images/icons/commingSoon.svg';
import '../../../assets/backend/css/customer.css';

function Profile(){

	const showmenu = useSelector(state => state.showsideMenu.showmenu)
	
	const [ profilePic, setProfilePic ] = useState( defaultProfilePic )
	
	const initialValues = {
		
		profile_pic: ''
		
	}
	const profileValidationSchema = Yup.object({
		
		
		
	})
	
	
	const imageHandler = (e)=>{
		const file = e.target.files[0];
		const reader = new FileReader();
		const url = reader.readAsDataURL(file);
		console.log(file.name)
		reader.onloadend = (e)=>{
			setProfilePic( reader.result )
			
		}
	}
	const handleUpload = (e)=>{
		
	}
	const handleSubmit =(e)=>{
		
	}
	return(

		<Col className="p-0" style={{overflowX: 'hidden' }}>
			<HeaderCustomerVenrdor />
			<Col className="dashboardContent">
				<Col>
					<Row>
						<Col className={`leftsidebarContainer mt-2 ${showmenu?'show':''}`}>
							<LeftSidebar />
						</Col>
						<Col md={9} xs={12} className="fullWidth">
							<Col className="content mt-2 pl-0 pr-0">
								<Col className="p-0">
									<Col>
										<h4>Basic Information</h4><br />
									</Col>
									<Formik initialValues={initialValues} onSubmit={handleUpload} validationSchema={profileValidationSchema}>
										<Form>
											<Row className="p-4">
												<Col md={2} xs={4}>
													<label className="cahngedProfilePic">
														<Image src={profilePic} alt="Profile Picture" />
														<Field type="file" name="profile_pic" onChange={imageHandler} />
													</label>
												</Col>
												<Col md={10} xs={8}>
													<button type="submit" className="btn-upload-profile-pic">Upload Photo</button>
													<p className="ml-4">
														<small>Allowed JPG, GIF or PNG. Max size of 2MB</small>
													</p>
												</Col>
											</Row>
										</Form>
									</Formik>
									<Col md={12} xs={12} className="mt-5"></Col>
									<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={profileValidationSchema}>
										<Form>
											<Col className="p-4">
												<Row>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Username &nbsp; <span className="required">*</span>
															<Field type="text" name="username" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Email &nbsp; <span className="required">*</span>
															<Field type="text" name="email" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Full Name &nbsp; <span className="required">*</span>
															<Field type="text" name="fullname" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Phone Number &nbsp; <span className="required">*</span>
															<Field type="text" name="phone_number" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Date of Birth &nbsp; 
															<Field type="date" name="dob" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Gender &nbsp; 
															<select name="gender" className="mt-2" >
																<option value="m">Male</option>
																<option value="f">Female</option>
															</select>
														</label>
													</Col>
												</Row>
											</Col>
											<br /><hr className="dashboardDivider" /><br />
											<Col className="p-4">
												<h6>Address Details</h6>
												<Row>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															H.No. / Unit No. / Street No &nbsp; <span className="required">*</span>
															<Field type="text" name="street_no" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Street Name &nbsp; <span className="required">*</span>
															<Field type="text" name="street_name" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Suburb &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															State / Province &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Country &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Postal Code &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
												</Row>
											</Col>
											<br /><hr className="dashboardDivider" /><br />
											<Col className="p-4">
												<h6>Social Media</h6>
												<Row>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Facebook URL &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Instagram URL &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															Youtube URL &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
													<Col md={6} xs={12}>
														<label className="inputInDashboard">
															LinkedIn URL &nbsp; <span className="required">*</span>
															<Field type="text" name="" value="" className="mt-2" />
														</label>
													</Col>
												</Row>
											</Col>
											<br /><hr className="dashboardDivider" /><br />
											<Col className="p-4">
												<button type="submit" className="btn-yellow">Save Changes</button>
											</Col>
										</Form>
									</Formik>
								</Col>
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default Profile;