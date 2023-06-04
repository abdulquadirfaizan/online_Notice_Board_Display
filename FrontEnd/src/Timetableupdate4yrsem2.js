import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Timetableupdate4yrsem2 = () => {
    const [user, setuser] = useState({
        Scode: "",
        Sname: "",
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
                    <h3>Time Table Update -4th year Semester 2</h3>
                    <div className="Updatetimetableinfo">
                        <div className="deletingsubjects">
                            <form action="" method="get">
                                <div className="Timetableupdatesubclass">
                                    <label htmlFor="">Subject Code and Name </label>
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

export default Timetableupdate4yrsem2

