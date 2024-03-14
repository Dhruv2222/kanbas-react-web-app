import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment } from "./assignmentsReducer";
function Assignments() {
  const { courseId } = useParams();
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId
  // );
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  console.log(assignmentList);
  // Function to format a Date object as "MM/DD/YYYY"
const formatDate = (date: any) => {
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/
          ${(date.getDate() + 1).toString().padStart(2, "0")}/
          ${date.getFullYear()}`;
};
const dispatch = useDispatch();
const handleDeleteConfirmation = (assign_id : any) => {
  const isConfirmed = window.confirm("Are you sure?");
  
  if (isConfirmed) {
    // User clicked "Yes", add functionality here
    console.log("User clicked Yes");
    dispatch(deleteAssignment(assign_id));
    
  }
};


  return (
    <div className="m-2">
      {/* {<!-- Add buttons and other fields here -->} */}
      <div className="d-flex">
        <div className="col-3">
          <input
            id="search-assignments"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>
        <div className="col-9">
          <button
            type="button"
            className="btn btn-light wd-button-style float-end mx-1"
          >
            <FaEllipsisV className="p-2 fs-2" style={{ color: "gray" }} />
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/Add+`}>
            <button
              type="button"
              className="btn btn-danger wd-button-style float-end mx-1"
            >
              <FaPlus /> Assignment
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-light wd-button-style float-end mx-1"
          >
            <FaPlus /> Group
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-assignments-list">
        <li className="list-group-item">
          <div className="wd-assignment-title p-2">
            <FaEllipsisV className="p-1 fs-4" style={{ color: "gray" }} />
            <GoTriangleDown className="p-1 fs-4" /> <b>Assignments</b>
            <span className="float-end">
              <span className="wd-40-percent">40% of Total</span>
              <FaPlus className="ms-2" style={{ color: "gray" }} />
              <FaEllipsisV className="ms-2" style={{ color: "gray" }} />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList
            .filter(
              (assignment) => assignment.course === courseId
            )
            .map((assignment) => (
              <li className="list-group-item">
                <div className="d-flex align-items-center">
                  <div className="d-block">
                    <FaEllipsisV className="wd-color-green p-2 fs-2" />
                    <PiNotePencil className="wd-color-green p-2 fs-1" />
                  </div>
                  <div className="d-block p-2 wd-assignment-heading">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <span className="wd-assignment-description">
      <br />
      <b>Description:</b> {assignment.description} <br />
      <b>Due:</b> {formatDate(new Date(assignment.dueDate))} | <b>Avlb:</b> {formatDate(new Date(assignment.avlFromDate))} | <b>Until:</b> {formatDate(new Date(assignment.untilDate))} | {assignment.points} pts
    </span>
                  </div>
                  <div className="flex-fill">
                    <span className="float-end">
                      <FaCheckCircle className="text-success p-2 fs-2" />
                      <FaEllipsisV className="mx-2 p-2 fs-2" />
                      <button className="btn btn-light wd-button-style mx-1"
                      onClick={() => handleDeleteConfirmation(assignment._id)}><MdDeleteForever className="mx-1 p-1 fs-2" /></button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Assignments;
