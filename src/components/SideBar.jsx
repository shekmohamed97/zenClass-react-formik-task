import React from 'react';
import {Link} from "react-router-dom"

const SideBar = () => {
    return (
        <>
           
     <div>
      
      <ul className="navbar-nav bg-gradient-primary sidebar">
        {/* Sidebar - Brand */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">Admin</div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link" to="/add">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Add book</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link" to="/edit">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Manage Book</span>
          </Link>
        </li>
      </ul>
    </div> 

       
        </>
    
    );
};

export default SideBar;