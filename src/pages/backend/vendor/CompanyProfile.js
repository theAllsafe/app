import { useSelector } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import profilePic from '../../../assets/frontend/images/icons/commingSoon.svg';
import '../../../assets/backend/css/customer.css';

function CompanyProfile(){

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
							<Col className="content mt-2 pl-0 pr-0">
								<form>
									<Col className="padding-4">
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
											<Col md={12} xs={12} className="mt-5">
												<h4>Service Info</h4>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Shop / Company Name
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Contact Number
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={12} xs={12}>
												<label className="inputInDashboard"> &nbsp; Company Discription
													<textarea name="" value=""></textarea>
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Contact Person Name
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Number Of Employee
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
										</Row>
									</Col>
									<br /><hr className="dashboardDivider" /><br />
									<Col className="padding-4">
										<h6>Address Details</h6>
										<Row>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													H.No. / Unit No. / Street No
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Street Name
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Suburb
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													State / Province
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Country
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Postal Code
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
										</Row>
									</Col>
									<br /><hr className="dashboardDivider" /><br />
									<Col className="padding-4">
										<h6>Social Media</h6>
										<Row>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Facebook URL
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Instagram URL
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													Youtube URL
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
											<Col md={6} xs={12}>
												<label className="inputInDashboard">
													LinkedIn URL
													<input type="text" name="" value="" className="mt-2" />
												</label>
											</Col>
										</Row>
									</Col>
									<br /><hr className="dashboardDivider" /><br />
									<Col className="padding-4">
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
export default CompanyProfile;