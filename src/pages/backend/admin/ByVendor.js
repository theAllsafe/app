import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarAdmin';

import 'react-circular-progressbar/dist/styles.css';
import '../../../assets/backend/css/customer.css';
import '../../../assets/backend/css/admin.css';

function ByVendor(){

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
								
								
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default ByVendor;