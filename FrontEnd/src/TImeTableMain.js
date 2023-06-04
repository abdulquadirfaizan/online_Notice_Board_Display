import React from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Timetableupdate4yrsem2 from './Timetableupdate4yrsem2'
export const TImeTableMain = () => {
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        {/* sidebar */}
        {/* sidebar */}
        <div className="mainframe">
          <div className='timetablemainbase'>
            <div className="secondyr">
              <input type="text" readOnly="" defaultValue="Second Year Time Table" />
              <br />
              <div className="timetable-dropdown">
                <Link to="/TimeTable2yrsem1"><button>Semester 1</button></Link>
                <br />
                <div className="addupdatedeletebtns">
                  <a href="/Timetableadd2yrsem1">
                    <Link to="/Timetableadd2yrsem1">
                      <input type='button' className="Addtimetable" value={'Add'} /></Link>
                  </a>
                  <a href="/Timetableupdate2yrsem1">
                    <Link to="/Timetableupdate2yrsem1">
                      <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                  </a>
                  <a href="/Timetabledelete2yrsem1">
                    <Link to="/Timetabledelete2yrsem1">
                      <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                  </a>
                </div>
                <br />
                <Link to="/TimeTable2yrsem2"><button>Semester 2</button></Link>
                <br />
                <div className="addupdatedeletebtns">
                  <a href="/Timetableadd2yrsem2">
                    <Link to="/Timetableadd2yrsem2">
                      <input type='button' className="Addtimetable" value={'Add'} /></Link>
                  </a>
                  <a href="/Timetableupdate2yrsem2">
                    <Link to="/Timetableupdate2yrsem2">
                      <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                  </a>
                  <a href="/Timetabledelete2yrsem2">
                    <Link to="/Timetabledelete2yrsem2">
                      <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="thirdyr">
              <input type="text" readOnly="" defaultValue="Third Year Time Table" />
              <br />
              <div className="timetable-dropdown">
                <div>
                  <Link to="/TimeTable3yrsem1"><button>Semester 1</button></Link>
                  <br />
                  <div className="addupdatedeletebtns">
                    <a href="/Timetableadd3yrsem1">
                      <Link to="/Timetableadd3yrsem1">
                        <input type='button' className="Addtimetable" value={'Add'} /></Link>
                    </a>
                    <a href="/Timetableupdate3yrsem1">
                      <Link to="/Timetableupdate3yrsem1">
                        <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                    </a>
                    <a href="/Timetabledelete3yrsem1">
                      <Link to="/Timetabledelete3yrsem1">
                        <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                    </a>
                  </div>
                </div>
                <br />
                <div className='semesters'>
                  <Link to="/TimeTable3yrsem2"><button>Semester 2</button></Link>
                  <br />
                  <div className="addupdatedeletebtns">
                    <a href="/Timetableadd3yrsem2">
                      <Link to="/Timetableadd3yrsem2">
                        <input type='button' className="Addtimetable" value={'Add'} /></Link>
                    </a>
                    <a href="/Timetableupdate3yrsem2">
                      <Link to="/Timetableupdate3yrsem2">
                        <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                    </a>
                    <a href="/Timetabledelete3yrsem2">
                      <Link to="/Timetabledelete3yrsem2">
                        <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="finalyr">
              <input type="text" readOnly="" defaultValue="Final Year Time Table" />
              <br />
              <div className="timetable-dropdown">
                <Link to="/TimeTable4yrsem1"><button>Semester 1</button></Link>
                <br />
                <div className="addupdatedeletebtns">
                  <a href="/Timetableadd4yrsem1">
                    <Link to="/Timetableadd4yrsem1">
                      <input type='button' className="Addtimetable" value={'Add'} /></Link>
                  </a>
                  <a href="/Timetableupdate4yrsem1">
                    <Link to="/Timetableupdate4yrsem1">
                      <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                  </a>
                  <a href="/Timetabledelete4yrsem1">
                    <Link to="/Timetabledelete4yrsem1">
                      <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                  </a>
                </div>
                <br />
                <Link to="/TimeTable4yrsem2"><button>Semester 2</button></Link>
                <br />
                <div className="addupdatedeletebtns">
                  <a href="/Timetableadd4yrsem2">
                    <Link to="/Timetableadd4yrsem2">
                      <input type='button' className="Addtimetable" value={'Add'} /></Link>
                  </a>
                  <a href="/Timetableupdate4yrsem2">
                    <Link to="/Timetableupdate4yrsem2">
                      <input type='button' className="Updatetimetable" value={'Update'} /></Link>
                  </a>
                  <a href="/Timetabledelete4yrsem2">
                    <Link to="/Timetabledelete4yrsem2">
                      <input type="button" className="Deletetimetable" value={'Delete'} /></Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default TImeTableMain