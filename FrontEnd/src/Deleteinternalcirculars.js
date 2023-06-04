import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
export const Deleteinternalcirculars = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="updation">
          <h3>Delete Internal Circular</h3>
          <div className="deletingnotices">
            <div className="deletenotice">
              <h4>Delete Internal circular Info</h4>
              <button className="deletenotices">Delete</button>
            </div>
          </div>
        </div>
      </div>


      <Footer></Footer>

    </>
  )
}

export default Deleteinternalcirculars