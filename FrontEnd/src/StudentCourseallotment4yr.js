import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const StudentCourseallotment4yr = () => {
  return (
    <>
    <StudenttHeader></StudenttHeader>
    <StudentNavbar></StudentNavbar>

    <div className="baseforeverypage">
  {/* sidebar */}
  {/* sidebar */}
  <div className="mainframe">
    <h1>Course Allotment for 4th year using Algorithm</h1>
  </div>
</div>


    <Footer></Footer>
    
    </>
  )
}

export default StudentCourseallotment4yr