import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import HeaderMenu from '../../../components/frontend/HeaderMenu';

import { BsCheck } from 'react-icons/bs';
import '../../../assets/frontend/css/businessaccount.css';

function StepFour(){

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
                            <span className="progressBarOne completed"></span>
                            <BsCheck className="progressIndicatorOne completed" />
                            <span className="stepOneText">Business Details</span>
                            <span className="progressBarTwo completed"></span>
                            <BsCheck className="progressIndicatorTwo completed" />
                            <span className="stepTwoText">Service Details</span>
                            <span className="progressBarThree completed"></span>
                            <BsCheck className="progressIndicatorThree completed" />
                            <span className="stepThreeText">Average Service Time </span>
                            <span className="progressBarFour"></span>
                            <BsCheck className="progressIndicatorFour active" />
                            <span className="stepFourText active">Bank Details</span>
                            <BsCheck className="progressIndicatorFive" />
                            <span className="stepFiveText">Upload Documents</span>
							<Col className="text-center stapeName mt-5">
                                <span className="active">Bank Details</span>
                            </Col>
                        </Col>
						<Col className="pt-5 pb-5 businessAcForm">
							<Col>
                                <form>
                                    <Row>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>ACCOUNT NUMBER</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="9999 999 9999" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>IFSC CODE</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="IFSC CODE" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>BANK NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="XYZ" />
                                            </label>
                                        </Col>
                                        <Col className="mt-4" md={4} xs={12}>
                                            <h5 className="text-right mt-3"><strong>BENEFICIARY NAME</strong></h5>
                                        </Col>
                                        <Col className="mt-4" md={8} xs={12}>
                                            <label className="inputInDashboard">
                                                <input type="text" name="" value="" className="mt-2" placeholder="LIBERTY ROAD" />
                                            </label>
                                        </Col>
                                        <Col md={12} className="text-right">
                                            <Link to="/create-business-account-step-five">
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
export default StepFour;