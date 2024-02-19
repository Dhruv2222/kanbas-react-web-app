import { Link, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaboration",
    "Syllabus",
    "Settings",
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-flex">
      <div className="d-block">
        <div className="d-none d-md-block" style={{ marginLeft: "80px" }}>
          <ul className="wd-navigation">
            {links.map((link, index) => (
              <li
                key={index}
                className={pathname.includes(link) ? "wd-active" : ""}
              >
                <Link to={link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CourseNavigation;
