import React from 'react'
import { Link } from 'react-router-dom'

export const StudentNavbar = () => {
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
                            <a href="/StudentHomepage">
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
                                        <a href=""><Link to="/StudentDepartmentNotices" >Department Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/StudentPlacementNotices"><Link to="/StudentPlacementNotices">Placement Notices</Link></a>
                                    </li>
                                    <li>
                                        <a href="/StudentPlacementResultNotices"><Link to="/StudentPlacementResultNotices">Placement Results</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Studentinternalcirculars"><Link to="/Studentinternalcirculars">Internal Circulars</Link></a>
                                    </li>
                                    <li>
                                        <a href="/Studentexternalcirculars"><Link to="/Studentexternalcirculars">External Circulars</Link></a>
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
