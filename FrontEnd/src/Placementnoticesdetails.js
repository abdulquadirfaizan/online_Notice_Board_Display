import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

export const Placementnoticesdetails = () => {
    const location = useLocation();
    const { index } = location.state;

    const PlacementNoticeArr = JSON.parse(localStorage.getItem("placement-notice-data"))
    const PlacementNoticeObj = PlacementNoticeArr[index];
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
                            <>
                                <h1 style={{ textAlign: "center" }}>Notice</h1>
                                <div className="topic">
                                    {PlacementNoticeObj.heading}
                                </div>
                                <div className="noticedetail">
                                    <p>
                                        {PlacementNoticeObj.content}
                                    </p>
                                    <p>
                                        {PlacementNoticeObj.date}
                                    </p>
                                </div>
                                <br />
                                <button>File Proof</button>
                            </>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}

export default Placementnoticesdetails;