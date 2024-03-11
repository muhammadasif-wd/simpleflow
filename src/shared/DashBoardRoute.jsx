import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoardRoute = () => {
    return (
        <div className=' bg-lightSecondary text-white rounded-sm w-56 '>
            <div className='py-32 ms-8'>
                <div className='my-4 '>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4   rounded  " : "hover:bg-primaryColor py-2 px-4   rounded "
                        }
                    >
                        Dashboard
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to="/dashboard-about-us"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                        }>
                        About Us
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to='/dashboard-contact' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                    }>
                        Contact
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to='/dashboard-portfolio' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                    }>
                        PortFolio
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to='/dashboard-add-new' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                    }>
                        Add new
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to='/dashboard-event' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                    }>
                        Events
                    </NavLink>
                </div>
                <div className='my-4 '>
                    <NavLink to='/dashboard-solution' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-primaryColor py-2 px-4 rounded" : "hover:bg-primaryColor py-2 px-4   rounded"
                    }>
                        Solutions
                    </NavLink>
                </div>




            </div>
        </div>
    );
};

export default DashBoardRoute;







// import { NavLink } from "@nextui-org/react";
// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const DashBoardRoute = () => {
// const logout = () => {
//     localStorage.clear();
//     window.location.replace("/");
// };
// return (
//     <div className='my-4 '>
//         <div className='my-4 '>
//             <div className='my-4 ' className="flex flex-wrap gap-3 my-40 w-11/12 mx-auto justify-end">
//                 <Link to={"/dashboard"}>
//                     <NavLink color py-2 px-4 px-8="green" className="capitalize">
//                         Dashboard
//                     </NavLink>
//                 </Link>
//                 <Link to={"/dashboard-about-us"}>
//                     <NavLink color py-2 px-4 px-8="green" className="capitalize">
//                         about-us
//                     </NavLink>
//                 </Link>
//                 <Link to={"/dashboard-contact"}>
//                     <NavLink color py-2 px-4 px-8="green" className="capitalize">
//                         contact
//                     </NavLink>
//                 </Link>
//                 <Link to={"/dashboard-solution"}>
//                     <NavLink color py-2 px-4 px-8="green" className="capitalize">
//                         Order
//                     </NavLink>
//                 </Link>
/* <NavLink color py-2 px-4 px-8="green" className="capitalize" onClick={logout}>
            Logout
          </NavLink> */
//                 </div>
//             </div>
//             <Outlet />
//         </div>
//     );
// };

// export default DashBoardRoute;