import { useSelector } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarAdmin';

import commingSoon from '../../../assets/frontend/images/icons/commingSoon.svg';
import 'react-circular-progressbar/dist/styles.css';
import '../../../assets/backend/css/customer.css';
import '../../../assets/backend/css/admin.css';

function AdminProfile(){

	const showmenu = useSelector(state => state.showsideMenu.showmenu);

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
							<Col className="content-apponiment mt-2 p-0">
								<Col className="p-3">
									<h2>Customer Detail</h2>
								</Col>
								<Row className="p-3">
									<Col md={6} xs={12}>
										<label className="inputInDashboard">
											Full Name
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Username
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Email
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Date of Birth
											<input type="date" name="" value="" className="mt-2" />
										</label>
									</Col>
									<Col md={6} xs={12}>
										<Image src={commingSoon} alt="Admin Image" className="adminProfilePic float-right" /><br />
										<label className="inputInDashboard">
											Phone Number
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Gender
											<input type="text" name="" value="" className="mt-2" />
										</label>
									</Col>
								</Row>
								<br /><br />
								<Col md={12} className="divider p-0">
									
								</Col>
								<br /><br />
								<Col><h6 className="pl-0">Address Details</h6></Col>
								<Row className="p-3">
									<Col md={6} xs={12}>
										<label className="inputInDashboard">
											H.No. / Unit No. / Street No
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Suburb
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Country
											<input type="text" name="" value="" className="mt-2" />
										</label>
									</Col>
									<Col md={6} xs={12}>
										<label className="inputInDashboard">
											Street Name
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											State / Province
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Postal Code
											<input type="date" name="" value="" className="mt-2" />
										</label>
									</Col>
								</Row>
								<br /><br />
								<Col md={12} className="divider p-0">
									
								</Col>
								<br /><br />
								<Col><h6 className="pl-0">Social Media</h6></Col>
								<Row className="p-3">
									<Col md={6} xs={12}>
										<label className="inputInDashboard">
											Facebook URL
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											Youtube URL
											<input type="text" name="" value="" className="mt-2" />
										</label>
									</Col>
									<Col md={6} xs={12}>
										<label className="inputInDashboard">
											Instagram URL
											<input type="text" name="" value="" className="mt-2" />
										</label>
										<label className="inputInDashboard">
											LinkedIn URL
											<input type="text" name="" value="" className="mt-2" />
										</label>
									</Col>
								</Row>
								<br /><br />
								<Col>
									<button type="button" className="btn-yellow">Save Changes</button><br /><br />
								</Col>
							</Col><br /><br />
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default AdminProfile;