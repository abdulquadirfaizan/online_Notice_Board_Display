import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export const Timetableadd2yrsem1 = () => {
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
                    <h3>Time Table Update -2nd year Semester 1</h3>
                    <div className="Updatetimetableinfo">
                        <form action="" method="post">
                            <div className="Timetablesubclass">
                                <label htmlFor="">Subject Code</label>
                                <input type="text" placeholder={"TIT-505"} name='Scode' id="noticeheading" onChange={(e) => senduser(e)} required />
                            </div>
                            <div className="Timetablesubclass">
                                <label htmlFor="">Subject Name</label>
                                <input type='text' name='Sname' placeholder={"Extra Class"}></input>
                            </div>
                            <div className="Timetablesubclass">
                                <label htmlFor="">Course Credits</label>
                                <input type="number" name='Scredit' placeholder={"10"} id="Scredit" onChange={(e) => senduser(e)} required />
                            </div>
                            <div className="Timetablesubclass">
                                <label htmlFor="">Total Hours</label>
                                <input type="number" name="SThours" id="SThours" placeholder={"20"} onChange={(e) => senduser(e)} required />
                            </div>
                            <div className="Timetablesubclass">
                                <label htmlFor="">Course Instructor</label>
                                <input type="text" name="Sinstructor" id="Sinstructor" placeholder={"XYZ"} onChange={(e) => senduser(e)} required />
                            </div>
                            <div className="Timetablesubclass" />
                        </form>
                        <button className="uploadsubmit" aria-readonly>Add</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Timetableadd2yrsem1