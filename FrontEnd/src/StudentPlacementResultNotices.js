import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import StudenttHeader from './StudenttHeader'
import { StudentNavbar } from './StudentNavbar'
export const StudentPlacementResultNotices = () => {
  return (
    <>
    <StudenttHeader></StudenttHeader>
     <StudentNavbar></StudentNavbar>
     <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
    Placement Result Notices Home
  </h1>
  <div className="baseforeverypage">
    <div className="mainframe">
      <div className="subtabsNotice">
        <div className="editdelete">
          <div className="resultrelatedNotices">
            <div className="resultofplacementNoticehead">
              Result of Placements <hr />
            </div>
            <span className="detailing-of-notices">
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 1</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 2</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 3</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 4</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 5</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 6</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 7</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 8</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 9</div>
              </a>
              <a href="/StudentPlacementResultsDetails">
                {" "}
                <div className="subclassofnotice">Result of Company 10</div>
              </a>
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

export default StudentPlacementResultNotices