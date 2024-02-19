import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaEnvelopeOpenText, FaSignOutAlt , FaRegQuestionCircle } from "react-icons/fa";
import { RiMovieLine } from "react-icons/ri";
import { IoSpeedometerOutline } from "react-icons/io5";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <IoSpeedometerOutline className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaEnvelopeOpenText className="fs-2" /> },
    { label: "History",  icon: <FaRegClock className="fs-2" /> },
    { label: "Studio",  icon: <RiMovieLine className="fs-2" /> },
    { label: "Commons",  icon: <FaSignOutAlt className="fs-2" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
    <a href="http://northeastern.edu"
              ><img
              src={`/images/dashboard_N_logo.jpeg`}
                className="wd-neu-logo"
            /></a>
      {links.map((link, index) => (
        <li key={index} className={`${pathname.includes(link.label) ? "wd-active" : ""} ${link.label.includes("Account") ? "" : "wd-other-icons"}`}
        > 
          <Link to={`/Kanbas/${link.label}`}> {link.icon} <span className={pathname.includes(link.label) ? "" : "wd-text"}>{link.label}</span> </Link>
        </li>
      ))}
    </ul>
  );
}


export default KanbasNavigation;