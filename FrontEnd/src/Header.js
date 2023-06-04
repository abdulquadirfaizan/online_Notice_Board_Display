import React from 'react'
import { Link } from 'react-router-dom'
import Pantnagar_logo from "./Pantnagar_logo.jpg"


const Header = () => {
    return (
        <>
            {/*navbar for every page*/}
            <div id="headerforeverypage">
                <div className="uninamelogo">
                    <div className="unilogo">
                        <a href="">
                            <img
                                src={Pantnagar_logo}
                                alt=""
                                className="unilogoImage"
                            />
                        </a>
                    </div>
                    <div className="universitynameandlogo">
                        Govind Ballabh Pant University of Agriculture and Technology
                    </div>
                </div>
                <div className="colgname">College of Technology</div>
                <div className="department">..Information Technology..</div>
                <div className="department">   </div>
            </div>
            <nav>
                <div className="logo" style={{ color: 'white' }}>Adminitrator Portal</div>
                <div className="loginmenu">
                    {/* <a href="/home"><Link to="/Homepage" style={{ color: 'white' }}> Home </Link></a> */}
                    {/* <a href="./UserProfile"><Link to="/UserProfile" style={{ color: 'white' }}> User Profile</Link></a> */}
                    <a href="/" style={{ color: 'white' }}>Logout</a>
                    {/* <a href="/auth/logout" style={{ color: 'white' }}>Logout</a> */}
                </div>
            </nav>
        </>
    )
}

export default Header