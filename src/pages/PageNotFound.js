import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import HeaderMenu from '../components/frontend/HeaderMenu';

function PageNotFound(){

	return(

		<Col className="overflowXHiddex">
			<Col className="reviewBookingHeader">
				<Col>
					<HeaderMenu classProps={{bgColor: 'blue', white: true}} />
				</Col>
			</Col>
			<Col className="pageNotFound">
				<h1>404 | Page Not Found</h1>
				<h4>Go to <Link to="/">homepage</Link></h4>
			</Col>
        </Col>

	);

}
export default PageNotFound;