import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import { BsCalendar } from 'react-icons/bs';
import 'react-circular-progressbar/dist/styles.css';
import '../../../assets/backend/css/customer.css';

function VendorDashboard(){

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
								<Row>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={85} styles={buildStyles({ pathColor: '#f36338' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={55} styles={buildStyles({ pathColor: '#55e453' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight last">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={92} styles={buildStyles({ pathColor: '#261c6b' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
							<Col className="content mt-2">
								<Row>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={85} styles={buildStyles({ pathColor: '#f36338' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={55} styles={buildStyles({ pathColor: '#55e453' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight last">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={92} styles={buildStyles({ pathColor: '#261c6b' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
								</Row>
							</Col>
							<Col className="content mt-2">
								<Row>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={85} styles={buildStyles({ pathColor: '#f36338' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={55} styles={buildStyles({ pathColor: '#55e453' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
									</Col>
									<Col md={4} xs={12} className="borderRight last">
										<Row>
											<Col xs={6} className="progressCircle">
												<Col style={{ width: 120, height: 120 }}>
													<CircularProgressbarWithChildren value={92} styles={buildStyles({ pathColor: '#261c6b' })}>
														<BsCalendar />
													</CircularProgressbarWithChildren>
												</Col>
											</Col>
											<Col xs={6} className="pt-2">
												<small><strong>Total Service Taken</strong></small><br />
												<big><strong>1500</strong></big><br />
												<small><strong>Till Today</strong></small>
											</Col>
										</Row>
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
export default VendorDashboard;