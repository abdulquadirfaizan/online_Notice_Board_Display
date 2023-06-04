import React, { useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from "axios"
export const Externalcirculardetails = () => {
    const [user, setuser] = useState({
        topic: "",
        detail: "",
        file: '',
        DATE: ''
    })

    const senddata = async () => {
        const x = await axios.get("", {

        })
    }

    const senduser = (e) => {
        setuser({ ...user, [e.target.id]: e.target.value })
    }

    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <div className="mainframe">
                <div className="circularsbase">
                    <div className="circularsbaseinnerpart">
                        <h1 style={{ textAlign: "center" }}>External Circular Details</h1>
                        <div className="topic" id="topic">
                            Educational visit to a few important historical sites in our city
                        </div>
                        <div className="noticedetail" id="detail">
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
                        <button id='DATE' className='DATE'>Date</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Externalcirculardetails
