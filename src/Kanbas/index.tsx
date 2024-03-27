import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import {courses} from "./Database";
import { useState, useEffect } from "react";
import axios from "axios";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [c, setCourses] = useState<any[]>([]);
  const COURSES_API = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../../images/dashboard_image_1.png"
  });
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course); 
    setCourses([ ...c, response.data ]);
  };

  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(
      `${COURSES_API}/${courseId}`
    );

    setCourses(c.filter((course) => course._id !== courseId));
  };
  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );

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
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

       </div>
       </div>
     </div>
     </Provider>
 );}
 export default Kanbas;