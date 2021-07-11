import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import HeaderMenu from '../../../components/frontend/HeaderMenu';

import { BsCheck } from 'react-icons/bs';
import '../../../assets/frontend/css/businessaccount.css';

function StepOne(){

    useLayoutEffect(() => {

	    window.scrollTo(0, 0);

	});

    return(
        
        <Col className="overflowXHiddex">
			<Col className="reviewBookingHeader">
				<Col>
					<HeaderMenu classProps={{bgColor: 'blue', white: true}} />
				</Col>
			</Col>
            <Row>
                <Col className="business-ac-wrapper">
                    <Col className="business-ac-container p-0">
                        <h2 className="p-3 pl-5">Create Business Account</h2>
                        <Col className="progressIndicatorBg">
                            <span className="progressBarOne"></span>
                            <BsCheck className="progressIndicatorOne active" />
                            <span className="stepOneText active">Business Details</span>
                            <span className="progressBarTwo"></span>
                            <BsCheck className="progressIndicatorTwo" />
                            <span className="stepTwoText">Service Details</span>
                            <span className="progressBarThree"></span>
                            <BsCheck className="progressIndicatorThree" />
                            <span className="stepThreeText">Average Service Time </span>
                            <span className="progressBarFour"></span>
                            <BsCheck className="progressIndicatorFour" />
                            <span className="stepFourText">Bank Details</span>
                            <BsCheck className="progressIndicatorFive" />
                            <span className="stepFiveText">Upload Documents</span>
                            <Col className="text-center stapeName mt-5">
                                <span className="active">Business Details</span>
                            </Col>
                        </Col>
                        <Col className="pt-5 pb-5 businessAcForm">
                            <Col>
                                <form>
                                    <Row>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>COMPANY NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="Shop / Provider Name" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>CONTACT PERSON NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="Contact Person Name" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>NUMBER OF EMPLOYEES</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="99" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>STREET NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="LIBERTY ROAD" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>SUBURBS NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="32B SYDNY ROAD" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>STATE</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="SYDNEY" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>PINCODE</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="9999999999" />
                                            </label>
                                        </Col>
                                        <Col md={12} className="text-right">
                                            <Link to="/create-business-account-step-two">
                                                <button type="button" name="" className="businessAcBtn">Save &amp; Next</button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Row>
        </Col>

    );

}
export default StepOne;