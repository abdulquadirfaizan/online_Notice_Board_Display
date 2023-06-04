import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Noticesdetails from './Noticesdetails'
export const Placementnotices = () => {

  /*Placement Data*/
  let dummyPlacementNoticeArr = "";
  if(!localStorage.getItem("isPlacementNoticeArraySaved")){
    dummyPlacementNoticeArr = [];
    localStorage.setItem("dummyplacementnoticeArr",JSON.stringify(dummyPlacementNoticeArr));
    localStorage.setItem("isPlacementNoticeArraySaved",true);
  }else{
    dummyPlacementNoticeArr = JSON.parse(localStorage.getItem("dummyplacementnoticeArr"));
  }
  
 // useEffect(() => {
  //  fetch('http://localhost:3001/project_final')
   ///   .then(res => res.json())
    //  .then(data => setData(data))
   //   .catch(err => console.log(err));
  //}, [])
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="mainframe">
          <div className="subtabsNotice">
             <div className="editdelete">
              <div className="placementrelatedNotice">
                <div className="placementrelatedNoticehead">
                  Placement Notices
                  <hr />
                </div>
                <span className="detailing-of-notices">
                  {dummyPlacementNoticeArr.map((valu,idxs)=>
                    <Link to="/Placementnoticesdetails" state={{index:idxs}}><div className="subclassofnotice">Notice {valu}</div></Link>
                  )}
                  </span>
              </div>
              <div className="editdeletebtns">
                <a href="/AddPlacementrelatednotices">
                  <button className="edit">Add</button>
                </a>
                <a href="/Editplacementnotices">
                  <button className="update">Update</button>
                </a>
                <a href="/Deleteplacementnotices">
                  <button className="delete">Delete</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Placementnotices
