import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import StudenttHeader from './StudenttHeader'
export const StudentInternalCirculardetails = () => {
  return (
    <>
<StudenttHeader></StudenttHeader>
      <StudentNavbar></StudentNavbar>
      <div className="mainframe">
                <div className="circularsbase">
                    <div className="circularsbaseinnerpart">
                        <h1 style={{ textAlign: "center" }}>External Circular Details</h1>
                        <div className="topic">
                            Educational visit to a few important historical sites in our city
                        </div>
                        <div className="noticedetail">
                            <p>
                                Vidya Mandir School <br />
                                History Club <br />
                                Notice <br />
                                <br />
                                22nd September, 20xx <br /> <br />
                                Visit Historical Sites <br />
                                Members of the club are hereby informed of a proposed educational
                                visit to a few important historical sites in our city which is likely
                                to be scheduled between the 28th and the 30th of Sep. Interested
                                members are required to pay ? 550 (inclusive of transport and snacks)
                                during the zero periods to the undersigned by the 25th of September.
                                <br />
                                Secretary <br />
                                History Club
                            </p>
                        </div>
                        <br />
                        <button className='file'>File Proof</button>
                    </div>
                </div>
            </div>
      <Footer></Footer>

    </>
  )
}

export default StudentInternalCirculardetails
