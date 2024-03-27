import React, { useState } from "react";
import { Link } from "react-router-dom";
import {courses} from "../Database";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
// import { courses } from "../Database";
function Dashboard( {
  c,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  c: any;
  course: any;
  setCourse: any;
  addNewCourse: any;
  deleteCourse: any;
  updateCourse: any;
}

) 
{ 
  const promise = axios.get(`${API_BASE}/api/courses`);
  promise.then((response) => {
    console.log(response); 
  })

  
  return (
    <div className="p-4" style={{marginLeft: '80px'}}>
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control mt-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control mt-2" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control mt-2" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control mt-2" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-outline-success m-2" onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-outline-primary m-2" onClick={updateCourse} >
        Update
      </button>


      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {c.map((course : any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                    
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-outline-success">
                    Go </Link>
                    <button
                    className="btn btn-outline-primary mx-2"
                    onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                    <button 
                    className="btn btn-outline-danger"
                    onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
              </button>
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