import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import '../../../assets/backend/css/customer.css';

function VendorServiceDetails(){

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
							<Col className="service-detail mt-2">
							<Col md={12} xs={12} className="p-4">
								<h4>Services</h4>
							</Col>
								<Row className="service">
									<Col md={2} xs={12} className="price-devider">
										<h1 className="mt-5">$ 999</h1>
									</Col>
									<Col md={6} xs={12}>
										<h2>Service Name 1</h2>
										<p>1 Tentative Time : 45 mins</p>
										<p>Small Description of service provided</p>
									</Col>
									<Col md={4} xs={12} className="text-right pt-5">
										<button type="button">Edit</button>
									</Col>
								</Row>
								<Row className="service">
									<Col md={2} xs={12} className="price-devider">
										<h1 className="mt-5">$ 999</h1>
									</Col>
									<Col md={6} xs={12}>
										<h2>Service Name 3</h2>
										<p>1 Tentative Time : 45 mins</p>
										<p>Small Description of service provided</p>
									</Col>
									<Col md={4} xs={12} className="text-right pt-5">
										<button type="button">Edit</button>
									</Col>
								</Row>
								<Row className="service">
									<Col md={2} xs={12} className="price-devider">
										<h1 className="mt-5">$ 999</h1>
									</Col>
									<Col md={6} xs={12}>
										<h2>Service Name 2</h2>
										<p>1 Tentative Time : 45 mins</p>
										<p>Small Description of service provided</p>
									</Col>
									<Col md={4} xs={12} className="text-right pt-5">
										<button type="button">Edit</button>
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
export default VendorServiceDetails;