import React, { useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import axios from "axios"
import { Link } from 'react-router-dom'
import Footer from './Footer'
export const Editnotices = () => {
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
          <h3>Update Department Notices</h3>
          <div className="deletingnotices">
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
                <button className="updatesubmit">Update</button>
              </a>
            </div>
            <div className="deletenotice">
              <div className="info" id="topic">Notice Info</div>
              <a href="/Uploadupdatednotices">
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

export default Editnotices