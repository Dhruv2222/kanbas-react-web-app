// import { courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import { GrInspect } from "react-icons/gr";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ c } : {c: any}) {
  const { courseId } = useParams();
  const location = useLocation();
  const pathElements = location.pathname.split('/');
  const courseNav = pathElements[pathElements.length - 1];
  const editAssignment =
  (courseNav.startsWith('A') && courseNav.length === 4) ||
  (courseNav.length === 13 && /^\d+$/.test(courseNav));


  

  const course = c.find((course : any) => course._id === courseId);
  console.log(course?._id);

  return (
    <div className="wd-course-main ">
      <div className="wd-course-heading d-none d-md-flex d-flex" style={{ marginLeft: "100px" }}>
        {/* <h3> <HiMiniBars3 style={{marginRight: '20px'}}/> {course?.number} {course?.name}</h3> */}

        <h4>
          <HiMiniBars3 style={{ marginRight: "20px" }} /></h4>
          <h4>
          <nav style={{}} aria-label="breadcrumb wd-custom-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item wd-breadcrumb-link">
                <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                  {course?.number} {course?.name}
                </Link>
              </li>
              
              {editAssignment && 
              <>
              <li className="breadcrumb-separator wd-separator">{">"}</li>
              <li className="breadcrumb-item wd-breadcrumb-link">
                <Link to={`/Kanbas/Courses/${course?._id}/Assignments`}>
                  Assignment
                </Link>
              </li></>}
              <li className="breadcrumb-separator wd-separator">{">"}</li>
              <li className="breadcrumb-item active" aria-current="page">
                {courseNav}
              </li>
            </ol>
          </nav></h4>
          <div className="ms-auto">
            <button type="button" className="btn btn-light wd-button-style">
             <GrInspect /> Student View
            </button>
          </div>
          
      </div>
      <hr className="d-none d-md-flex d-flex" style={{marginTop:'0px', marginLeft: '100px'}} />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "80px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
