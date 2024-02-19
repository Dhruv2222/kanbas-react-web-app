import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import { PiNotePencil } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
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
          <button
            type="button"
            className="btn btn-danger wd-button-style float-end mx-1"
          >
            <FaPlus /> Assignment
          </button>
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
            {assignmentList.map((assignment) => (
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
                      Week 0 - SETUP - Week starting on Monday | <br />
                      Due Sep 18, 2022 at 11:59pm | 100 pts
                    </span>
                  </div>
                  <div className="flex-fill">
                    <span className="float-end">
                      <FaCheckCircle className="text-success p-2 fs-2" />
                      <FaEllipsisV className="mx-2 p-2 fs-2" />
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
