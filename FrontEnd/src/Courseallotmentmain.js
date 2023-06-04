import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const Courseallotmentmain = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>


      <div className="baseforeverypage">
        {/* sidebar */}
        {/* sidebar */}
        <div className="mainframe">
          <div className="secondyr">
            <input type="text" readOnly="" defaultValue="Second Year " />
            <br />
            <div className="courseallotment-dropdown">
              <a href="/Courseallotement2yrsem1"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement2yrsem2'><button>Semester 2</button></a>
            </div>
          </div>
          <div className="thirdyr">
            <input type="text" readOnly="" defaultValue="Third Year " />
            <br />
            <div className="courseallotment-dropdown">
              <a href="/Courseallotement3yrsem1"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement3yrsem2'><button>Semester 2</button></a>
            </div>
          </div>
          <div className="finalyr">
            <input type="text" readOnly="" defaultValue="Final Year " />
            <br />
            <div className="courseallotment-dropdown">
              <a href="/Courseallotement4yrsem1"><button>Semester 1</button></a>
              <br />
              <a href='/Courseallotement4yrsem2'><button>Semester 2</button></a>
            </div>
          </div>
        </div>
      </div>



      <Footer></Footer>

    </>
  )
}

export default Courseallotmentmain