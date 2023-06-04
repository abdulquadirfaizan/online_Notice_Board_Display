import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const Deleteexternalcircular = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="updation">
          <h3>Delete External Circulars</h3>
          <div className="deletingnotices">
            <div className="deletenotice">
              <h4>Delete External Circular Info</h4>
              <button className="deletenotices">Delete</button>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Deleteexternalcircular