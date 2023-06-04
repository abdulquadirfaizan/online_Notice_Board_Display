import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Noticesdetails = () => {
  const location = useLocation();
  const {index} = location.state;
  // const [data, setData] = useState([])
  // useEffect(() => {
  //     fetch('http://localhost:3001/project_final')
  //         .then(res => res.json())
  //         .then(data => setData(data))
  //         .catch(err => console.log(err));
  // }, [])
  const noticeArr = JSON.parse(localStorage.getItem("notice-data"));
  const noticeObj = noticeArr[index];
  // const formattedContent = noticeObj.content.replace(/\n/g, '<br>');
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
                  {noticeObj.heading}
                </div>
                <div className="noticedetail" id="noticedetail">
                  <p>
                    {noticeObj.content}
                  </p>
                  <p>{noticeObj.date}</p>
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
  );
};

export default Noticesdetails;
