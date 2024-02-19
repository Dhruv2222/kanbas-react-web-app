import ModuleList from "./List";
import { CiCircleCheck } from "react-icons/ci";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

function Modules() {
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-light wd-button-style"
          style={{ marginRight: "5px" }}
        >
          Collapse All
        </button>
        <button
          type="button"
          className="btn btn-light wd-button-style"
          style={{ marginRight: "5px" }}
        >
          View Progress
        </button>
        <button
          type="button"
          className="btn btn-light dropdown-toggle wd-button-style"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ marginRight: "5px" }}
        >
          <CiCircleCheck style={{ color: "green" }} /> Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Publish Some
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Option 3
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-danger wd-button-style"
          style={{ marginRight: "5px" }}
        >
          <FaPlus /> Module
        </button>
        <button type="button" className="btn btn-light wd-button-style">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;
