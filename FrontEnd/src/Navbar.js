import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <>
            <div className="span">
                <span>
                    <div className="navbar">
                        <div className="tabwithlogo">
                            <div className="homeimage">
                                <a href="index.hbs">
                                    <img src="/images/home.png" className="HomeLogoImage" alt="" />
                                </a>
                            </div>
                            <a href="/Homepage">
                                <button className="homebtn" type="submit">
                                    Home
                                </button>
                            </a>
                        </div>
                        <div className="tabwithlogo">
                            <div className="homeimage ">
                                <img src="/images/circular.png" className="HomeLogoImage" alt="" />
                            </div>
                            <div className="menu-wrap">
                                Student Corner

                                <div className="drop-menu">
                                    <li>
                                        <a href="/Departmentnotices"><Link to="/Departmentnotices" >Department Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Placementnotices"><Link to="/Placementnotices">Placement Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Placementresults"><Link to="/Placementresults">Placement Results</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Internalcircular"><Link to="/Internalcircular">Internal Circulars</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Externalcircular"><Link to="/Externalcircular">External Circulars</Link></a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Navbar