import React, { useEffect } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const TimeTable3yrsem2 = () => {
  useEffect(() => {
    fetch('http://localhost:3001/project_final')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  },[])
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="baseforeverypage">
        <div className="mainframe">
          <div className='Tableview'>
            <h2>Semester 2</h2>
            <div className='Tableshow'>
              <table>
                <tr>
                  <th>Time/Days</th>
                  <th>9:00AM - 10:00AM</th>
                  <th>10:00AM - 11:00 AM</th>
                  <th>11:00AM - 12:00 AM</th>
                  <th>12:01PM - 01:00 PM</th>
                  <th>03:00PM - 04:00 PM</th>
                  <th>04:00PM - 05:00 PM</th>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default TimeTable3yrsem2