import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import AddNotices from "./Addnotices";
import Circularhomeinterface, { Internalcircular } from "./Internalcircular";
import StudentExternalCirculardetails from "./StudentExternalCirculardetails";
import Courseallotement2yrsem1 from "./Courseallotement2yrsem1";
import Courseallotement2yrsem2 from "./Courseallotement2yrsem2";
import Courseallotement3yrsem1 from './Courseallotement3yrsem1';
import Courseallotement3yrsem2 from './Courseallotement3yrsem2';
import Courseallotement4yrsem1 from "./Courseallotement4yrsem1";
import Courseallotement4yrsem2 from "./Courseallotement4yrsem2";
import Deleteexternalcircular from './Deleteexternalcircular';
import Deleteinternalcirculars from './Deleteinternalcirculars';
import Courseallotmentmain from './Courseallotmentmain';
import Deletenotices from './Deletenotices';
import Deleteplacementnotices from './Deleteplacementnotices';
import Deleteresultsofplacementnotices from './Deleteresultsofplacementnotices';
import Editexternalcircular from './Editexternalcircular';
import Editinternalcircular from './Editinternalcircular';
import Editnotices from './Editnotices';
import Editplacementnotices from './Editplacementnotices';
import Editresultsofplacementnotices from './Editresultsofplacementnotices';
import Departmentnotices from './Departmentnotices';
import Studentinternalcircular, { Studentcircularhomeinterface } from './Studentinternalcircular';
import StudentCourseallotment2yr from './StudentCourseallotment2yr';
import StudentCourseallotment3yr from './StudentCourseallotment3yr';
import StudentCourseallotment4yr from './StudentCourseallotment4yr';
import StudentCourseallotmentMain from './StudentCourseallotmentMain';
import StudentPlacementResultNotices, { StudentPlacementResultNoticesDetails } from './StudentPlacementResultNotices';
import StudentTimeTable2yr from './StudentTimeTable2yr';
import StudentTimeTable3yr from './StudentTimeTable3yr';
import StudentTimeTable4yr from './StudentTimeTable4yr';
import TImeTableMain from './TImeTableMain';
import Uploadupdatedexternalcircular from './Uploadupdatedexternalcircular';
import Uploadupdatedinternalcircular from './Uploadupdatedinternalcircular';
import Uploadupdatednotices from './Uploadupdatednotices';
import Uploadupdatedplacementnotices from './Uploadupdatedplacementnotices';
import Uploadupdatedresultsofplacementnotices from './Uploadupdatedresultsofplacementnotices';
import UserProfile from './UserProfile';
import StudentTImeTableMain from './StudentTImeTableMain';
import Homepage from './Homepage';
import Addplacementrelatednotices from './Addplacementrelatednotices';
import Addresultsofplacementnotices from './Addresultsofplacementnotices';
import Noticesdetails from './Noticesdetails';
import Placementnoticesdetails from './Placementnoticesdetails';
import Placementresultnoticesdetails from './Placementresultnoticesdetails';
import Internalcirculardetails from './Internalcirculardetails';
import Externalcirculardetails from './Externalcirculardetails';
import Addexternalcircular from './Addexternalcircular';
import Addinternalcircular from './Addinternalcircular';
import Timetableupdate4yrsem2 from './Timetableupdate4yrsem2';
import Timetableupdate4yrsem1 from './Timetableupdate4yrsem1';
import Timetableupdate2yrsem2 from './Timetableupdate2yrsem2';
import Timetableupdate3yrsem2 from './Timetableupdate3yrsem2';
import Timetableupdate2yrsem1 from './Timetableupdate2yrsem1';
import Timetableupdate3yrsem1 from './Timetableupdate3yrsem1';
import Timetableadd2yrsem1 from './Timetableadd2yrsem1';
import Timetableadd2yrsem2 from './Timetableadd2yrsem2';
import Timetableadd3yrsem1 from './Timetableadd3yrsem1';
import Timetableadd3yrsem2 from './Timetableadd3yrsem2';
import Timetableadd4yrsem1 from './Timetableadd4yrsem1';
import Timetableadd4yrsem2 from './Timetableadd4yrsem2';
import Timetableuploadupdate2yrsem1 from './Timetableuploadupdate2yrsem1';
import Timetableuploadupdate2yrsem2 from './Timetableuploadupdate2yrsem2';
import Timetableuploadupdate3yrsem2 from './Timetableuploadupdate3yrsem2';
import Timetableuploadupdate4yrsem1 from './Timetableuploadupdate4yrsem1';
import Timetableuploadupdate4yrsem2 from './Timetableuploadupdate4yrsem2';
import Timetabledelete2yrsem1 from './Timetabledelete2yrsem1';
import Timetabledelete2yrsem2 from './Timetabledelete2yrsem2';
import Timetabledelete3yrsem1 from './Timetabledelete3yrsem1';
import Timetabledelete3yrsem2 from './Timetabledelete3yrsem2';
import Timetabledelete4yrsem1 from './Timetabledelete4yrsem1';
import Timetabledelete4yrsem2 from './Timetabledelete4yrsem2';
import TimeTable2yrsem1 from './TimeTable2yrsem1';
import TimeTable3yrsem1 from './TimeTable3yrsem1';
import TimeTable4yrsem1 from './TimeTable4yrsem1';
import TimeTable4yrsem2 from './TimeTable4yrsem2';
import TimeTable3yrsem2 from './TimeTable3yrsem2';
import TimeTable2yrsem2 from './TimeTable2yrsem2';
import { useEffect } from 'react';
import Placementnotices from './Placementnotices';
import Placementresults from './Placementresults';
import Externalcircular from './Externalcircular';
import StudentHomepage from './StudentHomepage';
import StudentDepartmentNotices from './StudentDepartmentNotices';
import StudentDepartmentNoticesDetails from './StudentDepartmentNoticesDetails';
import StudentPlacementNotices from './StudentPlacementNotices';
import StudentPlacementNoticesDetails from './StudentPlacementNoticesDetails';
import StudentPlacementResultsNotices from './StudentPlacementResultNotices';
import StudentPlacementResultsDetails from './StudentPlacementResultsDetails';
import StudentInternalCirculardetails from './StudentInternalCirculardetails';
import Studentexternalcircular from './Studentexternalcircular';

function App() {
  return (
    <Router>
      { /*<LoginTopBar /> it will works as a header to all the pages */}
      <Routes>
        {/* <Route exact path="/" element={<><Login /><Login /></>} /> It will display the Login page twice.*/}
        <Route exact path="/" element={<><Login /></>} />
        <Route exact path="/Homepage" element={<><Homepage /></>} />
        <Route exact path="/Addnotices" element={<AddNotices />} />
        <Route exact path="/Addinternalcircular" element={<Addinternalcircular />} />
        <Route exact path="/Addresultsofplacementnotices" element={<Addresultsofplacementnotices />} />
        <Route exact path="/Addplacementrelatednotices" element={<Addplacementrelatednotices />} />
        <Route exact path="/Internalcircular" element={<Internalcircular />} />
        <Route exact path="/Externalcircular" element={<Externalcircular/>}/>
        <Route exact path="/Courseallotement2yrsem1" element={<Courseallotement2yrsem1 />} />
        <Route exact path="/Courseallotement2yrsem2" element={<Courseallotement2yrsem2 />} />
        <Route exact path="/Courseallotement3yrsem1" element={<Courseallotement3yrsem1 />} />
        <Route exact path="/Courseallotement3yrsem2" element={<Courseallotement3yrsem2 />} />
        <Route exact path="/Courseallotement4yrsem1" element={<Courseallotement4yrsem1 />} />
        <Route exact path="/Courseallotement4yrsem2" element={<Courseallotement4yrsem2 />} />
        <Route exact path="/Courseallotmentmain" element={<Courseallotmentmain />} />
        <Route exact path="/Deleteexternalcircular" element={<Deleteexternalcircular />} />
        <Route exact path="/Deleteinternalcirculars" element={<Deleteinternalcirculars />} />
        <Route exact path="/Deletenotices" element={<Deletenotices />} />
        <Route exact path="/Deleteplacementnotices" element={<Deleteplacementnotices />} />
        <Route exact path="/Deleteresultsofplacementnotices" element={<Deleteresultsofplacementnotices />} />
        <Route exact path="/Editexternalcircular" element={<Editexternalcircular />} />
        <Route exact path="/Editinternalcircular" element={<Editinternalcircular />} />
        <Route exact path="/Editnotices" element={<Editnotices />} />
        <Route exact path="/Editplacementnotices" element={<Editplacementnotices />} />
        <Route exact path="/Editresultsofplacementnotices" element={<Editresultsofplacementnotices />} />
        <Route exact path="/Departmentnotices" element={<Departmentnotices />} />
        <Route exact path='/Placementnotices' element={<Placementnotices/>} />
        <Route exact path='/Placementresults/' element={<Placementresults/>}/>
        {/* <Route exact path="/StudentCourseallotment2yr" element={<StudentCourseallotment2yr />} />
        <Route exact path="/StudentCourseallotment3yr" element={<StudentCourseallotment3yr />} />
      <Route exact path="/StudentCourseallotment4yr" element={<StudentCourseallotment4yr />} /> */}
        {/* <Route exact path="/StudentCourseallotmentMain" element={<StudentCourseallotmentMain />} /> */}
        <Route exact path="/StudentHomepage" element={<StudentHomepage />} />
        <Route exact path="/StudentDepartmentNotices" element={<StudentDepartmentNotices />} />
        <Route exact path="/StudentDepartmentNoticesDetails" element={<StudentDepartmentNoticesDetails />} />
        <Route exact path="/StudentPlacementNotices" element={<StudentPlacementNotices/>}  />
        <Route exact path="/StudentPlacementNoticesDetails" element={<StudentPlacementNoticesDetails/>}   />
        <Route exact path="/StudentPlacementResultNotices" element={<StudentPlacementResultNotices />} />
        <Route exact path="/StudentPlacementResultsDetails" element={<StudentPlacementResultsDetails />} />
        <Route exact path="/Studentinternalcirculars" element={<Studentinternalcircular />} />
        <Route exact path="/StudentInternalCirculardetails" element={<StudentInternalCirculardetails />} />
        <Route exact path="/Studentexternalcirculars" element={<Studentexternalcircular/>} />
        <Route exact path="/StudentExternalCirculardetails" element={<StudentExternalCirculardetails />} />
        <Route exact path="/StudentTimeTable2yr" element={<StudentTimeTable2yr />} />
        <Route exact path="/StudentTimeTable3yr" element={<StudentTimeTable3yr />} />
        <Route exact path="/StudentTimeTable4yr" element={<StudentTimeTable4yr />} />
        <Route exact path="/StudentTImeTableMain" element={<StudentTImeTableMain />} />
        <Route exact path="/TimeTable2yrsem1" element={<TimeTable2yrsem1 />} />
        <Route exact path="/TimeTable2yrsem2" element={<TimeTable2yrsem2 />} />
        <Route exact path="/TimeTable3yrsem1" element={<TimeTable3yrsem1 />} />
        <Route exact path="/TimeTable3yrsem2" element={<TimeTable3yrsem2 />} />
        <Route exact path="/TimeTable4yrsem1" element={<TimeTable4yrsem1 />} />
        <Route exact path="/TimeTable4yrsem2" element={<TimeTable4yrsem2 />} />
        <Route exact path="/TImeTableMain" element={<TImeTableMain />} />
        <Route exact path="/Uploadupdatedexternalcircular" element={<Uploadupdatedexternalcircular />} />
        <Route exact path="/Uploadupdatedinternalcircular" element={<Uploadupdatedinternalcircular />} />
        <Route exact path="/Uploadupdatednotices" element={<Uploadupdatednotices />} />
        <Route exact path="/Uploadupdatedplacementnotices" element={<Uploadupdatedplacementnotices />} />
        <Route exact path="/Uploadupdatedresultsofplacementnotices" element={<Uploadupdatedresultsofplacementnotices />} />
        <Route exact path="/Noticesdetails" element={<Noticesdetails />} />
        <Route exact path="/Addexternalcircular" element={<Addexternalcircular />} />
        <Route exact path="/Placementnoticesdetails" element={<Placementnoticesdetails />} />
        <Route exact path="/Internalcirculardetails" element={<Internalcirculardetails />} />
        <Route exact path="/Externalcirculardetails" element={<Externalcirculardetails />} />
        <Route exact path="/Placementresultnoticesdetails" element={<Placementresultnoticesdetails />} />
        <Route exact path="/Timetableadd2yrsem1" element={<Timetableadd2yrsem1 />} />
        <Route exact path="/Timetabledelete2yrsem1" element={<Timetabledelete2yrsem1 />} />
        <Route exact path="/Timetableupdate2yrsem1" element={<Timetableupdate2yrsem1 />} />
        <Route exact path="/Timetableuploadupdate2yrsem1" element={<Timetableuploadupdate2yrsem1 />} />
        <Route exact path="/Timetableadd2yrsem2" element={<Timetableadd2yrsem2 />} />
        <Route exact path="/Timetabledelete2yrsem2" element={<Timetabledelete2yrsem2 />} />
        <Route exact path="/Timetableupdate2yrsem2" element={<Timetableupdate2yrsem2 />} />
        <Route exact path="/Timetableuploadupdate2yrsem2" element={<Timetableuploadupdate2yrsem2 />} />
        <Route exact path="/Timetableadd3yrsem1" element={<Timetableadd3yrsem1 />} />
        <Route exact path="/Timetabledelete3yrsem1" element={<Timetabledelete3yrsem1 />} />
        <Route exact path="/Timetableupdate3yrsem1" element={<Timetableupdate3yrsem1 />} />
        <Route exact path="/Timetableuploadupdate3yrsem1" element={<Timetableuploadupdate3yrsem2 />} />
        <Route exact path="/Timetableadd3yrsem2" element={<Timetableadd3yrsem2 />} />
        <Route exact path="/Timetabledelete3yrsem2" element={<Timetabledelete3yrsem2 />} />
        <Route exact path="/Timetableupdate3yrsem2" element={<Timetableupdate3yrsem2 />} />
        <Route exact path="/Timetableuploadupdate3yrsem2" element={<Timetableuploadupdate3yrsem2 />} />
        <Route exact path="/Timetableadd4yrsem1" element={<Timetableadd4yrsem1 />} />
        <Route exact path="/Timetabledelete4yrsem1" element={<Timetabledelete4yrsem1 />} />
        <Route exact path="/Timetableupdate4yrsem1" element={<Timetableupdate4yrsem1 />} />
        <Route exact path="/Timetableuploadupdate4yrsem1" element={<Timetableuploadupdate4yrsem1 />} />
        <Route exact path="/Timetableadd4yrsem2" element={<Timetableadd4yrsem2 />} />
        <Route exact path="/Timetabledelete4yrsem2" element={<Timetabledelete4yrsem2 />} />
        <Route exact path="/Timetableupdate4yrsem2" element={<Timetableupdate4yrsem2 />} />
        <Route exact path="/Timetableuploadupdate4yrsem2" element={<Timetableuploadupdate4yrsem2 />} />
        <Route exact path="/UserProfile" element={<UserProfile />} />
        {/* <Route exact path="/Addnotices" element={<LoginTopBar />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
