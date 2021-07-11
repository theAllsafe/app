import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import '../../../assets/backend/css/customer.css';

function EditVendorService(){

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
								<Row className="allSelectedServices">
									<Col md={12} xs={12}>
										<h4>Services</h4><br />
									</Col>
									<Col md={12} xs={12}>
										<input type="text" name="" value="" placeholder="Enter Services" className="add-services" />
										<small className="mt-2">Note : Type &amp; Press enter to add new services</small>
									</Col>
									<Col md={12} className="mt-5"></Col>
									<Col md={3} xs={12}>
										<Col className="selectedServices">Spa <span className="float-right">X</span></Col>
									</Col>
									<Col md={3} xs={12}>
										<Col className="selectedServices">Massage <span className="float-right">X</span></Col>
									</Col>
									<Col md={3} xs={12}>
										<Col className="selectedServices">Shaving <span className="float-right">X</span></Col>
									</Col>
									<Col md={3} xs={12}>
										<Col className="selectedServices">Facial <span className="float-right">X</span></Col>
									</Col>
								</Row>
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default EditVendorService;