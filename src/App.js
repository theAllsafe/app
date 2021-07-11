import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Constants from './shared/constants';

import Homepage from './pages/frontend/Homepage';
import MoreServicves from './pages/frontend/MoreServicves';
import ServiceDetails from './pages/frontend/ServiceDetails';
import ReviewForBooking from './pages/frontend/ReviewForBooking';
import Login from './pages/frontend/Login';
import Signup from './pages/frontend/Signup';
import ForgotPassword from './pages/frontend/ForgotPassword';
import ResetPassword from './pages/frontend/ResetPassword';
import TermsAndConditions from './pages/frontend/TermsAndConditions';
import StepOne from './pages/frontend/businessaccount/StepOne';
import StepTwo from './pages/frontend/businessaccount/StepTwo';
import StepThree from './pages/frontend/businessaccount/StepThree';
import StepFour from './pages/frontend/businessaccount/StepFour';
import StepFive from './pages/frontend/businessaccount/StepFive';
import CustomerDashboard from './pages/backend/customer/CustomerDashboard';
import AppointmentSchedule from './pages/backend/customer/AppointmentSchedule';
import Profile from './pages/backend/customer/Profile';
import CustomerBilling from './pages/backend/customer/CustomerBilling';
import VendorDashboard from './pages/backend/vendor/VendorDashboard';
import VendorAppointment from './pages/backend/vendor/VendorAppointment';
import MyProfile from './pages/backend/vendor/MyProfile';
import CompanyProfile from './pages/backend/vendor/CompanyProfile';
import VendorServiceDetails from './pages/backend/vendor/VendorServiceDetails';
import EditVendorService from './pages/backend/vendor/EditVendorService';
import VendorBilling from './pages/backend/vendor/VendorBilling';
import AdminDashboard from './pages/backend/admin/AdminDashboard';
import VendorDashboardForAdmin from './pages/backend/admin/VendorDashboardForAdmin';
import VendorApproval from './pages/backend/admin/VendorApproval';
import VendorList from './pages/backend/admin/VendorList';
import VendorHealth from './pages/backend/admin/VendorHealth';
import CustomerDashboardForAdmin from './pages/backend/admin/CustomerDashboardForAdmin';
import CompanyDb from './pages/backend/admin/CompanyDb';
import InvoiceDashboard from './pages/backend/admin/InvoiceDashboard';
import ByVendor from './pages/backend/admin/ByVendor';
import ByCustomer from './pages/backend/admin/ByCustomer';
import AdminProfile from './pages/backend/admin/AdminProfile';
import UserCreation from './pages/backend/admin/UserCreation';
import Rbac from './pages/backend/admin/Rbac';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
	
	axios.defaults.baseURL 							= Constants.BASE_URL;
	axios.defaults.withCredentials 					= true;
	axios.defaults.headers.common['Accept'] 		= 'application/json';
	axios.defaults.headers.common['Content-Type'] 	= 'application/json;charset=UTF-8';
	
    return(

        <Router>

            <Switch>

                <Route path="/" exact component={ Homepage } />

                <Route path="/more-services" exact component={ MoreServicves } />

                <Route path="/service-details" exact component={ ServiceDetails } />

                <Route path="/review-for-booking" exact component={ ReviewForBooking } />

                <Route path="/login" exact component={ Login } />

                <Route path="/signup" exact component={ Signup } />

                <Route path="/forgot-password" exact component={ ForgotPassword } />

                <Route path="/reset-password" exact component={ ResetPassword } />

                <Route path="/terms-and-conditions" exact component={ TermsAndConditions } />

                <Route path="/create-business-account-step-one" exact component={ StepOne } />

                <Route path="/create-business-account-step-two" exact component={ StepTwo } />

                <Route path="/create-business-account-step-three" exact component={ StepThree } />

                <Route path="/create-business-account-step-four" exact component={ StepFour } />

                <Route path="/create-business-account-step-five" exact component={ StepFive } />

                <ProtectedRoute path="/customer-dashboard" exact component={ CustomerDashboard } />

                <Route path="/customer-appointment" exact component={ AppointmentSchedule } />

                <Route path="/customer-profile" exact component={ Profile } />

                <Route path="/customer-billing" exact component={ CustomerBilling } />

                <Route path="/vendor-dashboard" exact component={ VendorDashboard } />

                <Route path="/vendor-appointment" exact component={ VendorAppointment } />

                <Route path="/vendor-my-profile" exact component={ MyProfile } />

                <Route path="/vendor-company-profile" exact component={ CompanyProfile } />

                <Route path="/vendor-service-details" exact component={ VendorServiceDetails } />

                <Route path="/vendor-edit-service" exact component={ EditVendorService } />

                <Route path="/vendor-billing" exact component={ VendorBilling } />

                <Route path="/admin-dashboard" exact component={ AdminDashboard } />

                <Route path="/vendor-dashboard-for-admin" exact component={ VendorDashboardForAdmin } />

                <Route path="/vendor-approvals" exact component={ VendorApproval } />

                <Route path="/vendor-list" exact component={ VendorList } />

                <Route path="/vendor-health" exact component={ VendorHealth } />

                <Route path="/customer-dashboard-for-admin" exact component={ CustomerDashboardForAdmin } />

                <Route path="/company-db" exact component={ CompanyDb } />

                <Route path="/invoice-dashboard" exact component={ InvoiceDashboard } />

                <Route path="/by-vendor" exact component={ ByVendor } />

                <Route path="/by-customer" exact component={ ByCustomer } />

                <Route path="/admin-profile" exact component={ AdminProfile } />

                <Route path="/user-creation" exact component={ UserCreation } />

                <Route path="/rbac" exact component={ Rbac } />

                <Route path="*" component={ PageNotFound } />

            </Switch>

        </Router>

    );

}

export default App;
