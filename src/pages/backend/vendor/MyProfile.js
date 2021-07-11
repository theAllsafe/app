import { useSelector } from 'react-redux';
import { Col, Row , Image } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import profilePic from '../../../assets/frontend/images/icons/commingSoon.svg';
import '../../../assets/backend/css/customer.css';

function MyProfile(){

	const showmenu = useSelector(state => state.showsideMenu.showmenu)

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
							<Col className="content mt-2">
								<form>
									<Col>
										<h4>Basic Information</h4><br />
									</Col>
									<Col>
										<Row>
											<Col md={2} xs={4}>
												<label className="cahngedProfilePic">
													<Image src={profilePic} alt="Profile Picture" />
													<input type="file" />
												</label>
											</Col>
											<Col md={10} xs={8}>
												<button type="button" className="btn-upload-profile-pic">Upload Photo</button>
												<p className="ml-4">
													<small>Allowed JPG, GIF or PNG. Max size of 2MB</small>
												</p>
											</Col>
											<Col md={12} xs={12} className="mt-5"></Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Username &nbsp; <span className="required">*</span>
													<input type="text" name="" value="" className="mt-2" readonly="readonly" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Email &nbsp; <span className="required">*</span>
													<input type="text" name="" value="" className="mt-2" readonly="readonly" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Full Name &nbsp; <span className="required">*</span>
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Phone Number &nbsp; <span className="required">*</span>
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Date of Birth &nbsp; 
													<input type="date" name="" value="" className="mt-2" />
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
									<Col className="mt-4 pl-0">
										<button type="button" className="btn-yellow">Save Changes</button>
									</Col>
								</form>
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default MyProfile;