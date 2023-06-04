import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const StudentCourseallotmentMain = () => {
  return (
    <>
<StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
        Student Course Allotment Home
      </h1>
      <div className="baseforeverypage">
        {/* sidebar */}
        {/* sidebar */}
        <div className="mainframe">
          <div className="secondyr">
            <input type="text" readOnly="" defaultValue="Second Year " />
            <br />
            <div className="courseallotment-dropdown">
              <button>
                <a href="/StudentCourseallotment2yr"> Semester 1 </a>
              </button>
              <br />
              <button>
                <a href="/StudentCourseallotment2yr"> Semester 2 </a>
              </button>
            </div>
          </div>
          <div className="thirdyr">
            <input type="text" readOnly="" defaultValue="Third Year " />
            <br />
            <div className="courseallotment-dropdown">
              <button>
                <a href="/StudentCourseallotment3yr"> Semester 1 </a>
              </button>
              <br />
              <button>
                <a href="/StudentCourseallotment3yr"> Semester 2 </a>
              </button>
            </div>
          </div>
          <div className="finalyr">
            <input type="text" readOnly="" defaultValue="Final Year " />
            <br />
            <div className="courseallotment-dropdown">
              <button>
                <a href="/StudentCourseallotment4yr"> Semester 1 </a>
              </button>
              <br />
              <button>
                <a href="/StudentCourseallotment4yr"> Semester 2 </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  )
}


export default StudentCourseallotmentMain