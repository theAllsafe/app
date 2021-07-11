import { useSelector } from 'react-redux';
import { Col, Row, Table } from 'react-bootstrap';
import Chart from "react-google-charts";

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarAdmin';

import '../../../assets/backend/css/customer.css';
import '../../../assets/backend/css/admin.css';

function VendorDashboardForAdmin(){

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
							<Col className="content-apponiment mt-2 p-0">
								<Row className="pt-4">
									<Col md={6} xs={12} className="text-center">
										<h2 className="mr-5">Vendor Health</h2>
										<Chart
											width={'400px'}
											height={'400px'}
											chartType="PieChart"
											loader={<div>Loading Chart</div>}
											data={[
												['Task', 'Vendor Appointment'],
												['Total Appointment', 25],
												['Todays', 20],
												['Upcomming', 15],
												['Pending', 5],
												['Requested', 2],
											]}
											options={{
												title: '',
												colors: ['#ffcbcb','#cfeaff', '#74d4ff', '#ffe085','#f5baff'],
												legend: 'none',
											}}
											rootProps={{ 'data-testid': '1' }}
										/>
									</Col>
									<Col md={6} xs={12} className="text-center">
										<h2 className="mr-5">Booking Preference</h2>
										<Chart
											width={'400px'}
											height={'400px'}
											chartType="PieChart"
											loader={<div>Loading Chart</div>}
											data={[
												['Task', 'Vendor Appointment'],
												['Total Appointment', 12],
												['Todays', 20],
												['Upcomming', 15],
												['Pending', 5],
												['Requested', 30],
											]}
											options={{
												title: '',
												colors: ['#ffcbcb','#cfeaff', '#74d4ff', '#ffe085','#f5baff'],
												legend: 'none',
											}}
											rootProps={{ 'data-testid': '1' }}
										/>
									</Col>
								</Row>
								<Col md={12} className="divider p-0">
									
								</Col>
								<Col className="p-3">
									<h2>Current Appointments</h2>
								</Col>
								<div className="table-responsive">
                                    <Table className={`table table-bordered-outline`}>
                                        <thead>
                                            <tr className="text-center">
                                                <th>Client Name</th>
                                                <th>Type</th>
                                                <th>Appointments</th>
                                                <th>Amount Due</th>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
                                                <td>9</td>
                                                <td>$ 90</td>
                                                <td>$ 999</td>
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
export default VendorDashboardForAdmin;