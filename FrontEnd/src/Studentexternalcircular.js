import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const Studentexternalcircular = () => {
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
    External Circular
  </h1>
      <div className='baseforeverypage'>
        <div className="mainframe">
        <div className="subtabsNotice">
          <div className="editdelete">
            <div className="extrnalcircular">
              <div className="externalcircularhead">External Circular
              <hr />
              </div>
              <span className="detailing-of-notices">
              {dummyPlacementNoticeArr.map((valu,idxs)=>
                    <Link to="/StudentExternalcirculardetails" state={{index:idxs}}><div className="subclassofnotice">External Circular {valu}</div></Link>
                  )}      

                  <Link to="/StudentExternalcirculardetails" ><div className="subclassofnotice">External Circular 5</div></Link>          
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

export default Studentexternalcircular
