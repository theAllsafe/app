import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import showMenu from '../../redux/actions/menuAction';

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import commingSoon from '../../assets/frontend/images/icons/commingSoon.svg';
import '../../assets/backend/css/customer.css';

function LeftSidebarAdmin(){
	
	useLayoutEffect(()=>{
		window.scroll(0,0)
	},[]);
	
	const dispatch = useDispatch()

	useEffect(()=>{

		dispatch(showMenu(false));

	},[dispatch]);

    const showSubmenuHandler = (e)=>{
        
        e.preventDefault();

        if(e.target.parentNode.classList.contains('show')){

            e.target.parentNode.classList.remove( 'show' );

        }
        else{

            e.target.parentNode.classList.add( 'show' );

        }
        if(e.target.querySelector( '.float-right' ).classList.contains('roated')){

           e.target.querySelector( '.float-right' ).classList.remove( 'roated' );

        }
        else{

            e.target.querySelector( '.float-right' ).classList.add( 'roated' );

        }

    }

	return(
		<Col className="leftSidebar p-0">
			<span className="float-right m-4 closeIcon d-none">x<br /><br /><br /></span>
			<Col className="text-center">
				<Image src={ commingSoon } alt="Profile Pic" /><br /><br />
				<strong>Admin Name</strong><br />
				Profession
			</Col>
			<Col className="leftMenu p-0">
				<ul>
					<li>
						<NavLink activeClassName="active" to="/admin-dashboard"><BsChevronLeft /> &nbsp; &nbsp; Dashboard</NavLink>
					</li>
					<li className={`hasSubmenu`}>
						<NavLink to="vendor" onClick={showSubmenuHandler}><BsChevronLeft /> &nbsp; &nbsp; Vendor Management <BsChevronRight className={`float-right`} /></NavLink>
						<ul>
							<li><NavLink to="/vendor-dashboard-for-admin"> &nbsp; &nbsp; Dashboard</NavLink></li>
							<li><NavLink to="/vendor-approvals"> &nbsp; &nbsp; Approvals</NavLink></li>
                            <li><NavLink to="/vendor-list"> &nbsp; &nbsp; Vendor List</NavLink></li>
                            <li><NavLink to="/vendor-health"> &nbsp; &nbsp; Vendor Health</NavLink></li>
						</ul>
					</li>
					<li className={`hasSubmenu`}>
						<NavLink to="vendor" onClick={showSubmenuHandler}><BsChevronLeft /> &nbsp; &nbsp; Customer Management <BsChevronRight className={`float-right`} /></NavLink>
						<ul>
							<li><NavLink to="/customer-dashboard-for-admin"> &nbsp; &nbsp; Dashboard</NavLink></li>
							<li><NavLink to="/company-db"> &nbsp; &nbsp; Company DB</NavLink></li>
						</ul>
					</li>
                    <li className={`hasSubmenu`}>
						<NavLink to="vendor" onClick={showSubmenuHandler}><BsChevronLeft /> &nbsp; &nbsp; Invoice Management <BsChevronRight className={`float-right`} /></NavLink>
						<ul>
							<li><NavLink to="/invoice-dashboard"> &nbsp; &nbsp; Dashboard</NavLink></li>
							<li><NavLink to="/by-vendor"> &nbsp; &nbsp; By Vendor</NavLink></li>
                            <li><NavLink to="/by-customer"> &nbsp; &nbsp; By Customer</NavLink></li>
						</ul>
					</li>
					<li className={`hasSubmenu`}>
						<NavLink to="vendor" onClick={showSubmenuHandler}><BsChevronLeft /> &nbsp; &nbsp; Admin Setting <BsChevronRight className={`float-right`} /></NavLink>
						<ul>
							<li><NavLink to="/admin-profile"> &nbsp; &nbsp; My Profile</NavLink></li>
							<li><NavLink to="/user-creation"> &nbsp; &nbsp; User Creation</NavLink></li>
                            <li><NavLink to="/rbac"> &nbsp; &nbsp; RBAC</NavLink></li>
						</ul>
					</li>
				</ul>
				<br /><br />
			</Col>
		</Col>

	);

}
export default LeftSidebarAdmin;