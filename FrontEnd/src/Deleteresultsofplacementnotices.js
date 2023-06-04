import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import placementresultdata from './dummyDataforPlacementResult'

export const Deleteresultsofplacementnotices = () => {
  let dummyArr = JSON.parse(localStorage.getItem("dummyplacementresultArr"));
  let placementresultDataArr = JSON.parse(localStorage.getItem("placement-result-data"));
  function deleteNotice(index) {
    alert(" Deleting Notice ?")
    dummyArr.pop();
    placementresultDataArr.splice(index, 1);
    localStorage.setItem("dummyplacementresultArr", JSON.stringify(dummyArr));
    localStorage.setItem("placement-result-data", JSON.stringify(placementresultDataArr));

  }

  return (
    <>

      <Header></Header>
      <Navbar></Navbar>
      <div className="baseforeverypage">
        <div className="updation">
          <h3>Delete Placement Result Notices</h3>
          <div className="deletingnotices">
            {dummyArr.map((val, idx) => (
              <div className="deletenotice">
                <div className="info">Notice Info</div>
                <a
                  href=""
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                >
                {/* <a
                  href="/NoticesHomepage"
                  className="deletenotices"
                  onClick={() => deleteNotice(idx)}
                > */}
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

export default Deleteresultsofplacementnotices