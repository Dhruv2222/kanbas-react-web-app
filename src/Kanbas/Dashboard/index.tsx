import React, { useState } from "react";
import { Link } from "react-router-dom";
import {courses} from "../Database";
// import { courses } from "../Database";
function Dashboard() {
  const [c, setCourses] = useState(courses);
  const course = {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  };
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };

  return (
    <div className="p-4" style={{marginLeft: '80px'}}>
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <button onClick={addNewCourse} >
        Add
      </button>

      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {c.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;