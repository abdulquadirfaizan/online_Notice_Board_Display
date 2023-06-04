import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const StudentPlacementNotices = () => {
  return (
    <>
    <StudenttHeader></StudenttHeader>
     <StudentNavbar></StudentNavbar>
      <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
        Placement Notices Home
      </h1>
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
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 1</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 2</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 3</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 4</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 5</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 6</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 7</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 8</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 9</div>
                  </a>
                  <a href="/StudentPlacementNoticesDetails">
                    <div className="subclassofnotice">Company 10</div>
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

export default StudentPlacementNotices