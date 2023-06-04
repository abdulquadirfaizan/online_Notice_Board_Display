import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const Studentinternalcircular = () => {
  let dummyPlacementNoticeArr = "";
  if(!localStorage.getItem("isPlacementNoticeArraySaved")){
    dummyPlacementNoticeArr = [];
    localStorage.setItem("dummyplacementnoticeArr",JSON.stringify(dummyPlacementNoticeArr));
    localStorage.setItem("isPlacementNoticeArraySaved",true);
  }else{
    dummyPlacementNoticeArr = JSON.parse(localStorage.getItem("dummyplacementnoticeArr"));
  }
  return (
    <>
    <StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
    Internal Circualar
  </h1>
      <div className='baseforeverypage'>
        <div className="mainframe">
        <div className="subtabsNotice">
          <div className="editdelete">
            <div className="extrnalcircular">
              <div className="externalcircularhead">Internal Circular
              <hr />
              </div>
              <span className="detailing-of-notices">
              {dummyPlacementNoticeArr.map((valu,idxs)=>
                    <Link to="/StudentInternalcirculardetails" state={{index:idxs}}><div className="subclassofnotice">Internal Circular {valu}</div></Link>
                  )}     
                  <Link to="/StudentInternalcirculardetails"><div className="subclassofnotice">Internal Circular </div></Link>          
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>

    </>
  )
}

export default Studentinternalcircular
