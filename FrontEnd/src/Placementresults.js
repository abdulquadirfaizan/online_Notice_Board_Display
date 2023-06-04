import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Noticesdetails from './Noticesdetails'
export const Placementresults = () => {

/* Result of Placement */
  let dummyPlacementResultNoticeArr = "";
  if(!localStorage.getItem("isPlacementResultNoticeArraySaved")){
    dummyPlacementResultNoticeArr = [];
    localStorage.setItem("dummyplacementresultArr",JSON.stringify(dummyPlacementResultNoticeArr));
    localStorage.setItem("isPlacementResultNoticeArraySaved",true);
  }else{
    dummyPlacementResultNoticeArr = JSON.parse(localStorage.getItem("dummyplacementresultArr"));
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
              <div className="resultrelatedNotices">
                <div className="resultofplacementNoticehead">
                  Result of Placements <hr />
                </div>
                <span className="detailing-of-notices">
                  {dummyPlacementResultNoticeArr.map((val,idx)=>
                    <Link to="/Placementresultnoticesdetails" state={{index:idx}}><div className="subclassofnotice">Notice {val}</div></Link>
                  )}
                  </span>
              </div>
              <div className="editdeletebtns">
                <a href="/Addresultsofplacementnotices">
                  <button className="edit">Add </button>
                </a>
                <a href="/Editresultsofplacementnotices">
                  <button className="update">Update </button>
                </a>
                <a href="/Deleteresultsofplacementnotices">
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

export default Placementresults
