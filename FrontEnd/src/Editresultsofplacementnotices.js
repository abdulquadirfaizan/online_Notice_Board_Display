import React, { useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import axios from "axios"
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const Editresultsofplacementnotices = () => {
  const [user, setuser] = useState({
    topic: ""
  })

  const senddata = async () => {
    const x = await axios.get("", {

    })
  }
  const senduser = (e) => {
    setuser({ ...user, [e.target.id]: e.target.value })
  }
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="updation">
          <h3>Update Placement Result Notices</h3>
          <div className="deletingnotices">
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e) => senduser(e)}>Placement Result Info</div>
              <a href="/Uploadupdatedresultsofplacementnotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Editresultsofplacementnotices