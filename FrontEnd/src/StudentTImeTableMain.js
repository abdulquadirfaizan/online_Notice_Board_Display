import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import StudenttHeader from './StudenttHeader'
import { StudentNavbar } from './StudentNavbar'
export const StudentTImeTableMain = () => {
  return (
    <>
<StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <h1 style={{ background: "white", textAlign: "center", padding: "1%" }}>
        Student Time Table Home
      </h1>
      <div className="baseforeverypage">
        {/* sidebar */}
        {/* sidebar */}
        <div className="mainframe">
          <div className="secondyr">
            <input type="text" readOnly="" defaultValue="Second Year Time Table" />
            <br />
            <div className="timetable-dropdown">
              <button>
                <a href="/StudentTimeTable2yr"> Semester 1</a>
              </button>
              <br />
              <button>
                <a href="/StudentTimeTable2yr"> Semester 2</a>
              </button>
            </div>
          </div>
          <div className="thirdyr">
            <input type="text" readOnly="" defaultValue="Third Year Time Table" />
            <br />
            <div className="timetable-dropdown">
              <button>
                <a href="/StudentTimeTable3yr"> Semester 1</a>
              </button>
              <br />
              <button>
                <a href="/StudentTimeTable3yr"> Semester 2</a>
              </button>
            </div>
          </div>
          <div className="finalyr">
            <input type="text" readOnly="" defaultValue="Final Year Time Table" />
            <br />
            <div className="timetable-dropdown">
              <button>
                <a href="/StudentTimeTable4yr"> Semester 1</a>
              </button>
              <br />
              <button>
                <a href="/StudentTimeTable4yr"> Semester 2</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>


    </>
  )
}

export default StudentTImeTableMain