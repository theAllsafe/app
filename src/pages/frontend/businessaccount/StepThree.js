import { Link } from 'react-router-dom';
import { Col, Row, Accordion, Card } from 'react-bootstrap';

import HeaderMenu from '../../../components/frontend/HeaderMenu';

import { BsCheck } from 'react-icons/bs';
import '../../../assets/frontend/css/businessaccount.css';

function StepThree(){

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
                            <span className="progressBarThree"></span>
                            <BsCheck className="progressIndicatorThree active" />
                            <span className="stepThreeText active">Average Service Time </span>
                            <span className="progressBarFour"></span>
                            <BsCheck className="progressIndicatorFour" />
                            <span className="stepFourText">Bank Details</span>
                            <BsCheck className="progressIndicatorFive" />
                            <span className="stepFiveText">Upload Documents</span>
							<Col className="text-center stapeName mt-5">
                                <span className="active">Average Service Time</span>
                            </Col>
                        </Col>
						<Col className="pt-5 pb-5 businessAcForm">
                            <Col>
                                <form>
                                    <Row>
                                        <Col md={4} xs={12} className="mt-3">
                                            <h4 className="text-right"><strong>AVERAGE SERVICE TIME</strong></h4>
                                        </Col>
                                        <Col md={8} xs={12}>
                                            <Accordion defaultActiveKey="0">
                                                <Card>
                                                    <Card.Header>
                                                        <Accordion.Toggle eventKey="0">
                                                            <h5>Select Average Service Time</h5>
                                                        </Accordion.Toggle>
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body>
                                                            <ul>
                                                                <li>30 mins <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>45 mins <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>60 mins <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                                <li>90 mins <label className="checkboxBusiness float-right"><input type="checkbox" /><span></span></label></li>
                                                            </ul>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </Col>
                                        <Col md={12} className="text-right">
                                            <Link to="/create-business-account-step-four">
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
export default StepThree;