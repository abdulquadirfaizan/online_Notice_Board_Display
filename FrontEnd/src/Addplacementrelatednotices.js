import React, { useState } from 'react'
import axios from "axios"
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'

export const Addplacementrelatednotices = () => {
  const [user, setuser] = useState({
    topic: "",
    detail: "",
    file: "",
    DATE: "",
  });

  const initialValues = {
    heading: "",
    content: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
//console.log(values)
  let noticeArr = JSON.parse(localStorage.getItem("notice-data"));
  noticeArr.push(values);

  const handleNoticeSubmission = (e) => {
    alert("Notice Uploaded. Returning to Placement Notice Homepage")
    console.log(values)
  //  let dummynoticeArr = JSON.parse(localStorage.getItem("dummynoticeArr"));
 //   let num = dummynoticeArr[dummynoticeArr.length - 1];
  //  dummynoticeArr.push(++num);
  //  localStorage.setItem("dummynoticeArr", JSON.stringify(dummynoticeArr));
  //  localStorage.setItem("notice-data", JSON.stringify(noticeArr));
  };

  // const senddata = async () => {
  //   const x = await axios.post("", {});
  // };

  // const senduser = (e) => {
  //   setuser({ ...user, [e.target.name]: e.target.value });
  // };
  return (
    <>
      <Header />
      <Navbar />
      <div className="baseforeverypage">
        <div className="mainframe">
          <h3>Add New Placement Notice</h3>
          <div className="uploadnotices">
            <form
              action="/Addnotices"
              method="post"
              encType="multipart/form-data"
            >
              <div className="subclass">
                <label htmlFor="">Heading/Topic</label>
                <input
                  type="text"
                  id="noticeheading"
                  name="heading"
                  value={values.heading}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Type-Placement Notice:</label>
                <textarea
                  rows={20}
                  id="textarea"
                  name="content"
                  value={values.content}
                  onChange={handleInputChange}
                  required
                  defaultValue={""}
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Upload PDF file as Proof</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  // onChange={(e) => senduser(e)}
                  // required
                />
              </div>
              <div className="subclass">
                <label htmlFor="">Event is on :</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={values.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="subclass" />
            </form>
            <a href="/Placementnotices">
              <button
                type="submit"
                className="uploadsubmit"
                onClick={handleNoticeSubmission}
                name="upload"
              >
                Upload
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Addplacementrelatednotices