import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

export const Timetabledelete4yrsem2 = () => {
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
          <h3>Time Table Delete Subject-4th year Semester 2</h3>
          <div className="Updatetimetableinfo">
            <div className="deletingsubjects">
              <form action="" method="get">
                <div className="Timetableupdatesubclass">
                  <label htmlFor="">Subject Code</label>
                  <input type="text" value={"TIT-505"} name='Scode' id="noticeheading" onChange={(e) => senduser(e)} required />
                  <input type="text" value={"XYZ"} name='Sname' id="noticeheading" onChange={(e) => senduser(e)} required />
                  <button className="Timetableuploadsubmit" aria-readonly>Delete</button>
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

export default Timetabledelete4yrsem2