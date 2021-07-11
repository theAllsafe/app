import { useSelector } from 'react-redux';
import { Col, Row, Table } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarAdmin';

import 'react-circular-progressbar/dist/styles.css';
import '../../../assets/backend/css/customer.css';
import '../../../assets/backend/css/admin.css';

function VendorList(){

	const showmenu = useSelector(state => state.showsideMenu.showmenu)

	return(

		<Col className="p-0" style={{overflowX: 'hidden' }}>
			<HeaderCustomerVenrdor />
			<Col className="dashboardContent">
				<Col>Name
					<Row>
						<Col className={`leftsidebarContainer mt-2 ${showmenu?'show':''}`}>
							<LeftSidebar />
						</Col>
						<Col md={9} xs={12} className="fullWidth">
							<Col className="content-apponiment mt-2 p-0">
								<Col className="p-3">
									<h2>Vendor List</h2>
								</Col>
								<div className="table-responsive">
									<Table className={`table table-bordered-outline`}>
										<thead>
											<tr className="text-center">
												<th>Client Name</th>
												<th>Type</th>
												<th>Appointments</th>
												<th>Total Earnings</th>
											</tr>
										</thead>
										<tbody>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
											<tr className="text-center">
												<td className="appoinmentName">
													<Row>
														<Col md={2} xs={2} className="profilePic ml-5"></Col>
														<Col md={8} xs={8} className="text-left">
															<strong>Richard Wilson</strong><br />
															#CN0016
														</Col>
													</Row>
												</td>
												<td>Spa</td>
												<td>45</td>
												<td>$ 1999</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</Col>
						</Col>
					</Row>
				</Col>
			</Col>
		</Col>

	);

}
export default VendorList;