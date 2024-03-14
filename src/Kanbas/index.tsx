import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {courses} from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [c, setCourses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../../images/dashboard_image_1.png"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...c, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(c.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      c.map((c1) => {
        if (c1._id === course._id) {
          return course;
        } else {
          return c1;
        }
      })
    );
  };
   return (
    <Provider store={store}>
     <div className="d-flex">
      <div className="d-none d-md-block">
      <KanbasNavigation/>
      </div>
      
      <div className="flex-fill">
       
       <div className="">
       <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard
              c={c}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses c={c} />} />
        </Routes>

       </div>
       </div>
     </div>
     </Provider>
 );}
 export default Kanbas;