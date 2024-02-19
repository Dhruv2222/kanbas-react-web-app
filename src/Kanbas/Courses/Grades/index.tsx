import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaCog,
  FaChevronDown,
} from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa6";
import { NONAME } from "dns";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="flex-fill m-2">
      <div className="d-flex justify-content-between">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle text-danger px-0 py-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Gradebook
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <FaRegKeyboard style={{color: 'red'}} className="text-red my-2" />
        <div className="wd-float-right">
          <button
            type="button"
            className="btn btn-light wd-button-style px-4 m-1"
          >
            <FaSignInAlt /> Import
          </button>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-light dropdown-toggle wd-button-style px-4 m-1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaSignOutAlt /> Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  CSV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  PDF
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Print
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-light wd-button-style px-3">
            <FaCog />
          </button>
        </div>
      </div>

      <br />
      <hr style={{ color: "white" }} />

      <div className="row">
        <div className="col-6 mb-3">
          <label htmlFor="assignment_name" className="form-label">
            Student Names
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text p-3" id="basic-addon1">
                <IoMdSearch />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="assignment_name"
              placeholder="Search students"
              aria-label="Search students"
              aria-describedby="basic-addon1"
            />
            <div className="input-group-postpend">
              <span className="input-group-text p-3" id="basic-addon1">
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="assignment_name" className="form-label">
            Assignment Names
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text p-3" id="basic-addon1">
                <IoMdSearch />
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="assignment_name"
              placeholder="Search assignments"
              aria-label="Search assignments"
              aria-describedby="basic-addon1"
            />
            <div className="input-group-postpend">
              <span className="input-group-text p-3" id="basic-addon1">
                <FaChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-light wd-button-style p-2 mb-4 mt-0"
        >
          <CiFilter className="fs-4" /> Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <th scope="col" style={{ textAlign: "left", fontWeight: "bold" }}>
              Student Name
            </th>
            {as.map((assignment) => (
              <th style={{ textAlign: "center" }} scope="col">
                {assignment.title}
                <br />
                <span
                  style={{ paddingBottom: "0px" }}
                  className="wd-heading-details"
                >
                  Out of 100
                </span>
              </th>
            ))}
          </thead>

          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <th scope="row" className="wd-breadcrumb-link">
                    <a href="#" className="mx-0">
                      {user?.firstName} {user?.lastName}
                    </a>
                  </th>
                  {assignments
                    .filter((assignment) =>
                      grades.some(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      )
                    )
                    .map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return <td key={assignment._id}>{grade?.grade || ""}</td>;
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
