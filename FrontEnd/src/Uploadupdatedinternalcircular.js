import React, { useState } from 'react'
import axios from "axios"
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const Uploadupdatedinternalcircular = () => {
  const [user, setuser] = useState({
    topic: "",
    detail: "",
    file: "",
    DATE: ""
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
          <h3>Edit Internal Circular</h3>
          <div className="uploadnotices">
            <form action="" method="post">
              <div className="subclass">
                <label htmlFor="">Heading/Topic</label>
                <input type="text" name="topic" id="noticeheading" onChange={(e) => senduser(e)} required />
              </div>
              <div className="subclass">
                <label htmlFor="">Type-Internal Circular:</label>
                <textarea
                  name="detail"
                  rows={20}
                  id="textarea"
                  onChange={(e) => senduser(e)}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Upload PDF file as Proof</label>
                <input type="file" name="file" id="file" onChange={(e) => senduser(e)} required />
              </div>
              <div className="subclass">
                <label htmlFor="">Event is on :</label>
                <input type="date" name="DATE" id="date" onChange={(e) => senduser(e)} required />
              </div>
              <div className="subclass" />
              <button className="uploadsubmit">UPLOAD</button>
            </form>
          </div>
        </div>
      </div>


      <Footer></Footer>

    </>
  )
}

export default Uploadupdatedinternalcircular