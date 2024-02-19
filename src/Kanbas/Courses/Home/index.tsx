import Modules from "../Modules";
import ModuleList from "../Modules/List";
import "./index.css";
import { FaBars, FaChevronDown,FaCalendarAlt, FaTimes, FaBan, FaCheckCircle, FaSignOutAlt, FaRegBell, FaDotCircle } from "react-icons/fa";
import { PiEyeglassesLight, PiSignIn } from "react-icons/pi";
import { ImTarget } from "react-icons/im";
import { IoBarChart } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="d-flex">
  {/* <!-- Main navigation bar --> */}
  <div className="d-none d-md-block">
    {/* <!-- Account, etc --> */}
  </div>

  {/* <!-- Rest of the middle content --> */}
  <div className="flex-fill">
    <div
      className="d-none d-md-flex d-flex m-4"
      style={{marginLeft: "80px!important"}}
    >
      {/* <!-- Red heading with bars and course name and breadcrums --> */}
    </div>

    {/* <!-- This navbar is shown only when screen size is below medium --> */}
    <div className="d-xs-block d-md-none">
      <nav className="navbar navbar-light bg-dark justify-content-between">
        <Link to="#"
          ><button
            type="button"
            className="btn btn-dark wd-navbar-menu-icons"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaBars style={{color: "white"}} /></button
        ></Link>
        

        <span className="wd-menu-font">CS4550.12631.202410<br />Modules</span>
        <form className="form-inline">
        <PiEyeglassesLight style={{color: "white"}} />

          <Link to="/Kanbas/Courses/Sandbox/course_bar.html"
            ><button
              type="button"
              className="btn btn-dark wd-navbar-menu-icons"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FaChevronDown style={{color: "white"}}
              /></button
          ></Link>
          
        </form>
      </nav>
    </div>

    {/* <hr className="d-none d-md-flex" /> */}

    <div className="d-flex">

      <div className="flex-fill">
        {/* <!-- Assignments main middle content --> */}
        {/* <!-- Add modules here --> */}
        <Modules/>
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block mx-4" style={{width: "275px"}}>
        <div className="wd-float-right">
          Course Status

          <ul className="wd-course-status-btn">
            <li className="w-100" style={{listStyle: "none"}}>
              <div className="row">
                <div className="col-md-6 wd-publish-btn">
                  <button
                    type="button"
                    className="btn btn-light wd-button-style w-100"
                  >
                    <FaBan /> Unpublished
                  </button>
                </div>
                <div className="col-md-6 wd-unpublish-btn">
                  <button
                    type="button"
                    className="btn btn-success wd-button-style w-100"
                  >
                    <FaCheckCircle /> Published
                  </button>
                </div>
              </div>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"
                ><PiSignIn className="wd-course-status-icons" /> Import Existing Content</a
              >
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"><FaSignOutAlt className="wd-course-status-icons" /> Import From Commons</a>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"><ImTarget className="wd-course-status-icons" /> Choose Home Page</a>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"><IoBarChart className="wd-course-status-icons" /> View Course Stream</a>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"><CiBullhorn className="wd-course-status-icons" /> New Announcements</a>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"><IoBarChart className="wd-course-status-icons" /> New Analytics</a>
            </li>
            <li className="btn btn-light wd-button-style w-100">
              <a href="#"
                ><FaRegBell className="wd-course-status-icons" /> View Course Notifications</a
              >
            </li>
          </ul>

          <b>To do</b>
          <hr />
          <div className="row">
            <div className="col-1">
            <FaDotCircle style={{color: "red"}}/>
            </div>
            <div className="col-9 wd-todo-heading">
              <a href="#">Grade A1 - ENV + HTML</a><br />
              <span className="wd-todo-description"
                >100 points • Sep 18 at 11:59pm</span
              >
            </div>
            <div className="col-2">
            <FaTimes style={{color: "gray"}}/>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <b>Coming Up</b>
            </div>
            <div className="col wd-todo-heading">
            <FaCalendarAlt style={{color: "gray"}}/>
              <a href="#"> View Calendar</a><br />
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-1">
            <FaCalendarAlt style={{color: "gray"}}/>
            </div>
            <div className="col-11 wd-todo-heading">
              <a href="#">Lecture</a><br />
              <span className="wd-todo-description">CS4550.1256.123456</span><br />
              <span className="wd-todo-description">Sep 11 at 11:45am</span>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
            <FaCalendarAlt style={{color: "gray"}}/>
            </div>
            <div className="col-11 wd-todo-heading">
              <a href="#">Lecture</a><br />
              <span className="wd-todo-description">CS4550.1256.123456</span><br />
              <span className="wd-todo-description">Sep 11 at 11:45am</span>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
            <FaCalendarAlt style={{color: "gray"}}/>
            </div>
            <div className="col-11 wd-todo-heading">
              <a href="#">Lecture</a><br />
              <span className="wd-todo-description">CS4550.1256.123456</span><br />
              <span className="wd-todo-description">Sep 11 at 11:45am</span>
            </div>
          </div>
          <br />
          <span className="wd-todo-heading"
            ><a href="#">12 more in the next week</a><br />
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
export default Home;