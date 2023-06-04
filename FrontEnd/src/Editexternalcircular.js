import React, { useState } from 'react'
import axios from "axios"
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const Editexternalcircular = () => {
  const [user, setuser] = useState({
    topic: "",
  })

  const senddata = async () => {
    const x = await axios.post("", {

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
          <h3>Update External Circular</h3>
          <div className="deletingnotices">
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic" onChange={(e)=>senduser(e)} >External Circulars</div>
              <a href="/Uploadupdatedexternalcircular">
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

export default Editexternalcircular