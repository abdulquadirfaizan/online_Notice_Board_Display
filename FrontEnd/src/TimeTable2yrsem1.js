import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
export const TimeTable2yrsem1 = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/time_table_second_year')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <>

      <Header></Header>
      <Navbar></Navbar>

      <div className="baseforeverypage">
        <div className="mainframe">
          <div className='Tableview'>
            <h2>Semester 1</h2>
            <div className='Tableshow'>
              <table>
                <thead>
                  <th>Days</th>
                  <th>8:00AM-9:00AM</th>
                  <th>9:00AM-10:00AM</th>
                  <th>10:00AM-11:00AM</th>
                  <th>11:00AM-12:00AM</th>
                  <th>12:00PM-1:00PM</th>
                  <th>2:00PM-3:00PM</th>
                  <th>3:00PM-4:00PM</th>
                  <th>4:00PM-5:00PM</th>
                </thead>
                <tbody>
                  {data.map((d, i) => {
                    <tr key={i}>
                      <td>{d.days}</td>
                      <td>{d.a}</td>
                      <td>{d.b}</td>
                      <td>{d.c}</td>
                      <td>{d.d}</td>
                      <td>{d.e}</td>
                      <td>{d.f}</td>
                      <td>{d.g}</td>
                      <td>{d.h}</td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>

    </>
  )
}

export default TimeTable2yrsem1