import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const Externalcircular = () => {
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

      <Header></Header>
      <Navbar></Navbar>

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
                    <Link to="/Externalcirculardetails" state={{index:idxs}}><div className="subclassofnotice">External Circular {valu}</div></Link>
                  )}                
              </span>
            </div>
            <div className="editdeletebtns">
              <a href="/Addexternalcircular">
                <button className="edit">Add</button>
              </a>
              <a href="/Editexternalcircular">
                <button className="update">Update </button>
              </a>
              <a href="/Deleteexternalcircular">
                <button className="delete"> Delete</button>
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

export default Externalcircular