import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Timetableupdate2yrsem2 = () => {
    const [user, setuser] = useState({
        Scode: "",
        Sname: "",
        Scredit: "",
        SThours: "",
        Sinstructor: ""
    })

    const senddata = async () => {
        const x = await axios.post("", {

        })
    }

    const senduser = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <>

            <Header></Header>
            <Navbar></Navbar>
            <div className="baseforeverypage">
                <div className="mainframe">
                    <h3>Time Table Update -2nd year Semester 2</h3>
                    <div className="Updatetimetableinfo">
                        <div className="deletingsubjects">
                            <form action="" method="get">
                                <div className="Timetableupdatesubclass">
                                    <label htmlFor="">Subject Code</label>
                                    <input type="text" value={"TIT-505"} name='Scode' id="noticeheading" onChange={(e) => senduser(e)} required />
                                    <input type="text" value={"XYZ"} name='Sname' id="noticeheading" onChange={(e) => senduser(e)} required />
                                    <Link to="/Timetableuploadupdate2yrsem1"><button className="Timetableuploadsubmit" aria-readonly>Update</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Timetableupdate2yrsem2