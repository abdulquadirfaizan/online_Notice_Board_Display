import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import placementdata from './dummyDataforPlacement'
export const Deleteplacementnotices = () => {

  let dummyArr = JSON.parse(localStorage.getItem("dummyplacementnoticeArr"));
  const size = dummyArr.length
  let placementnoticeDataArr = JSON.parse(localStorage.getItem("placement-notice-data"));
  function deleteNotice(index) {
    alert(" Deleting Notice ?")
    dummyArr.pop();
    placementnoticeDataArr.splice(index, 1);
    localStorage.setItem("dummyplacementnoticeArr", JSON.stringify(dummyArr));
    localStorage.setItem("placement-notice-data", JSON.stringify(placementnoticeDataArr));
  }

  return (
    <>

      <Header></Header>
      <Navbar></Navbar>
      <div className="baseforeverypage">
        <div className="updation">
          <h3>Delete Placement Notices</h3>
          <div className="deletingnotices">
            {dummyArr.map((val, idx) => (
              <div className="deletenotice">
                <div className="info">Notice Info</div>
                {/* <a
                  href="/NoticesHomepage"
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                > */}
                <a
                  href=""
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                >
                  Delete
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  )
}

export default Deleteplacementnotices