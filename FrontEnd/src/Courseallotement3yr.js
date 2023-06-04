import React, { useState } from 'react'
import Header from './Header'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Courseallotement3yr = () => {
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [allotment, setAllotment] = useState({});
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedMaxClasses, setSelectedMaxClasses] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTeacherSubmit = (e) => {
    e.preventDefault();

    if (selectedTeacher.trim() !== '') {
      const newTeacher = {
        id: teachers.length + 1,
        name: selectedTeacher,
        maxClassesPerDay: selectedMaxClasses,
      };

      setTeachers([...teachers, newTeacher]);
      setSelectedTeacher('');
      setSelectedMaxClasses(1);
    }
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();

    if (selectedCourse.trim() !== '') {
      const newCourse = {
        id: courses.length + 1,
        name: selectedCourse,
      };

      setCourses([...courses, newCourse]);
      setSelectedCourse('');
    }
  };

  const handleAllotment = (e) => {
    const allottedCourses = allotment[selectedTeacher] || [];
    e.preventDefault();
    const teacher = teachers.find((t) => t.name === selectedTeacher);
    const totalClassesPerDay = calculateTotalClassesPerDay(teacher);
    const classesLeft = teacher.maxClassesPerDay - totalClassesPerDay;
    
    if (classesLeft <= 0) {
      setErrorMessage(`No more classes available for ${teacher.name}`);
      return;
    }
    if (allottedCourses.includes(selectedCourse)) {
      setErrorMessage('Course has already been allotted to the selected teacher.');
    }
    else if (setSelectedMaxClasses < 0) { setErrorMessage('Limit of number of classes per day for the selected teacher is exceeds.'); }
    else {
      const currentAllotment = [...allottedCourses, selectedCourse];

      const updatedAllotment = {
        ...allotment,
        [selectedTeacher]: currentAllotment,
      };

      setAllotment(updatedAllotment);
      setErrorMessage('')
    }
  };

  const calculateTotalClassesPerDay = (teacher) => {
    const allottedCourses = allotment[teacher.name] || [];
    return allottedCourses.length;
  };

  // const calculateClassesLeftPerDay = (teacher) => {
  //   const allottedCourses = allotment[teacher.name] || [];
  //   const totalClassesPerDay = calculateTotalClassesPerDay(teacher);
  //   const classesLeft = teacher.maxClassesPerDay - totalClassesPerDay;
  //   return classesLeft >= 0 ? classesLeft : 0;
  // };
  const calculateClassesLeftPerDay = (teacher) => {
    const allottedCourses = allotment[teacher.name] || [];
    const totalClassesPerDay = calculateTotalClassesPerDay(teacher);
    const classesLeft = teacher.maxClassesPerDay - totalClassesPerDay;
    return Math.max(classesLeft, 0);
  };

  const isSubjectDisabled = (subject) => {
    for (const teacher of Object.keys(allotment)) {
      if (allotment[teacher].includes(subject)) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="baseforeverypage">
        <div className='mainframe'>
          <div className='courseallotmentbase'>
            <div className='courseallotment'>
              <div className="course-allotment">
                <h1>Course Allotment</h1>

                <div className="form-group">
                  <form onSubmit={handleTeacherSubmit}>
                    <label htmlFor="teacher">Enter Teacher:</label>
                    <input
                      id="teacher"
                      type="text"
                      className="form-control"
                      value={selectedTeacher}
                      onChange={(e) => setSelectedTeacher(e.target.value)}
                      required
                    />
                    <label htmlFor="max-classes-per-day">Enter Maximum Classes per Day:</label>
                    <input
                      id="max-classes-per-day"
                      type="number"
                      className="form-control"
                      value={selectedMaxClasses}
                      onChange={(e) => setSelectedMaxClasses(Number(e.target.value))}
                      required
                    />
                    <button className="btne" type="submit">
                      Add Teacher
                    </button>
                  </form>
                </div>

                <div className="form-group">
                  <form onSubmit={handleCourseSubmit}>
                    <label htmlFor="course">Enter Course:</label>
                    <input
                      id="course"
                      type="text"
                      className="form-control"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      required
                    />
                    <button className="btne" type="submit">
                      Add Course
                    </button>
                  </form>
                </div>

                <div className="form-group">
                  <label htmlFor="teacher-select">Select Teacher:</label>
                  <select
                    id="teacher-select"
                    className="form-control"
                    value={selectedTeacher}
                    onChange={(e) => setSelectedTeacher(e.target.value)}
                    required
                  >
                    <option value="">Select Teacher</option>
                    {teachers.map((teacher) => (
                      <option
                        key={teacher.id}
                        value={teacher.name}
                        disabled={allotment[teacher.name]?.length >= teacher.maxClassesPerDay}
                      >
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="course-select">Select Course:</label>
                  <select
                    id="course-select"
                    className="form-control"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    required
                    disabled={!selectedTeacher}
                  >
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option
                        key={course.id}
                        value={course.name}
                        disabled={isSubjectDisabled(course.name)}
                      >
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="btne" onClick={handleAllotment} disabled={!selectedTeacher || !selectedCourse}>
                  Allot Course
                </button>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                {/* <h2>Allotment Details</h2>
    {teachers.map((teacher) => (
      <div key={teacher.id} className="teacher-allotment">
        <h3>{teacher.name}</h3>
        <p>Total Classes per Day: {calculateTotalClassesPerDay(teacher)}</p>
        <p>Classes Left per Day: {calculateClassesLeftPerDay(teacher)}</p>
        <ul className="course-list">
          {allotment[teacher.name] &&
            allotment[teacher.name].map((course, index) => (
              <li key={index}>{course}</li>
            ))}
        </ul>
      </div>
    ))} */}
              </div>
              <div className='AllotementDetails'>
                <h2>Allotment Details</h2>
                <table className="allotment-table">
                  <thead>
                    <tr>
                      <th>Teacher</th>
                      <th>Total Classes per Day</th>
                      <th>Classes Left per Day</th>
                      <th>Allotted Courses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teachers.map((teacher) => (
                      <tr key={teacher.id}>
                        <td>{teacher.name}</td>
                        <td>{calculateTotalClassesPerDay(teacher)}</td>
                        <td>{calculateClassesLeftPerDay(teacher)}</td>
                        <td>
                          <ul className="course-list">
                            {allotment[teacher.name] &&
                              allotment[teacher.name].map((course, index) => (
                                <li key={index}>{course}</li>
                              ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
export default Courseallotement3yr