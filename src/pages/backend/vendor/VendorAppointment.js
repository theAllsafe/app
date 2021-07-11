import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Table } from 'react-bootstrap';

import HeaderCustomerVenrdor from '../../../components/backend/HeaderCustomerVenrdor';
import LeftSidebar from '../../../components/backend/LeftSidebarVendor';

import '../../../assets/backend/css/customer.css';

function VendorAppointment(){

    const showmenu = useSelector(state => state.showsideMenu.showmenu)

    const [ isTodayActive, setIsTodayActive ] = useState( true );

    const [ isUpcomingActive, setIsUpcomingActive ] = useState( false );

    const activeToday =()=>{

        setIsTodayActive( true );

        setIsUpcomingActive( false );

    }
    const activeUpcoming =()=>{

        setIsTodayActive( false );

        setIsUpcomingActive( true );

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
                            <h4>Appointment Schedule</h4><br /><br />
                            <Col className="content-apponiment mt-2 p-0">
                                <button type="button" className={`today ${isTodayActive?'active':''}`} onClick={activeToday}>Today</button> &nbsp; &nbsp; 
                                <button type="button" className={`upcoming ${isUpcomingActive?'active':''}`} onClick={activeUpcoming}>Upcoming</button> <br /><br />
                                <div className="table-responsive">
                                    <Table className={`table table-bordered-outline ${isTodayActive?'':'d-none'}`}>
                                        <thead>
                                            <tr className="text-center">
                                                <th>Client Name</th>
                                                <th>Appt. Date</th>
                                                <th>Type</th>
                                                <th>Paid Amount</th>
                                                <th>Amount Due</th>
                                                <th>Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge success">Success</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Table className={`table table-bordered-outline ${isUpcomingActive?'':'d-none'}`}>
                                        <thead>
                                            <tr className="text-center">
                                                <th>Client Name</th>
                                                <th>Appt. Date</th>
                                                <th>Type</th>
                                                <th>Paid Amount</th>
                                                <th>Amount Due</th>
                                                <th>Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Bsi</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge success">Success</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wilson</strong><br />
                                                            #CN0016
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge danger">Pending</span></td>
                                            </tr>
                                            <tr class="text-center">
                                                <td className="appoinmentName">
                                                    <Row>
                                                        <Col md={2} xs={2} className="profilePic ml-5"></Col>
                                                        <Col md={8} xs={8} className="text-left">
                                                            <strong>Richard Wiliumson</strong><br />
                                                            #CN0018
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td className="appoinmentName">11 Nov 2019<br /><span>10.00 AM</span></td>
                                                <td>Spa</td>
                                                <td>$ 9</td>
                                                <td>$ 90</td>
                                                <td><span className="customBadge success">Success</span></td>
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
export default VendorAppointment;