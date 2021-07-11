import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = (props) => {
	
	const location = useLocation()
	const login = useSelector(state => state.loginStatus.loginstatus)

	
	return login ? (
		<Route {...props} />
		) : (
		<Redirect
			to={{
			pathname: "/login",
			state: { from: location }
		}}
    />
  );
};
export default ProtectedRoute;