import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export const Placementresultnoticesdetails = () => {
    const location = useLocation();
    const { index } = location.state;
    const PlacementResultNoticeArr = JSON.parse(localStorage.getItem("placement-result-data"))
    const PlacementResultNoticeObj = PlacementResultNoticeArr[index]
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>

            <div className="baseforeverypage">
                {/* sidebar */}
                {/* sidebar */}
                <div className="mainframe">
                    <div className="circularsbase">
                        <div className="circularsbaseinnerpart">
                            <h1 style={{ textAlign: "center" }}>Notice</h1>
                            <div className="topic">
                                {PlacementResultNoticeObj.heading}
                            </div>
                            <div className="noticedetail">
                                <p>
                                    {PlacementResultNoticeObj.content}
                                </p>
                                <p>
                                    {PlacementResultNoticeObj.date}
                                </p>
                            </div>
                            <br />
                            <button>File Proof</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Placementresultnoticesdetails;