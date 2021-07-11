import { Link } from 'react-router-dom';
import { Col, Row, Accordion, Card } from 'react-bootstrap';

import HeaderMenu from '../../../components/frontend/HeaderMenu';

import { BsCheck } from 'react-icons/bs';
import '../../../assets/frontend/css/businessaccount.css';

function StepTwo(){

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
                            <span className="progressBarTwo"></span>
                            <BsCheck className="progressIndicatorTwo active" />
                            <span className="stepTwoText active">Service Details</span>
                            <span className="progressBarThree"></span>
                            <BsCheck className="progressIndicatorThree" />
                            <span className="stepThreeText">Average Service Time </span>
                            <span className="progressBarFour"></span>
                            <BsCheck className="progressIndicatorFour" />
                            <span className="stepFourText">Bank Details</span>
                            <BsCheck className="progressIndicatorFive" />
                            <span className="stepFiveText">Upload Documents</span>
                            <Col className="text-center stapeName mt-5">
                                <span className="active">Service Details</span>
                            </Col>
                        </Col>
                        <Col className="pt-5 pb-5 businessAcForm">
                            <Col>
                                <form>
                                    <Row>
                                        <Col md={4} xs={12} className="mt-3">
                                            <h4 className="text-right"><strong>SELECT SERVICE</strong></h4>
                                        </Col>
                                        <Col md={8} xs={12}>
                                            <Accordion defaultActiveKey="0">
                                                <Card>
                                                    <Card.Header>
                                                        <Accordion.Toggle eventKey="0">
                                                            <h5>Select Services</h5>
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>
                                                            <ul>
                                                                <li>Sevices One <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Two <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Three <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Four <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Five <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Six <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Seven <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Eight <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>Sevices Nine <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                            </ul>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </Col>
                                        <Col md={12} className="text-right">
                                            <Link to="/create-business-account-step-three">
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
export default StepTwo;