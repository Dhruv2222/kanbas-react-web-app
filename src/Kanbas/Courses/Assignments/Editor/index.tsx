import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="mx-2 flex-fill">
        <div className="d-flex align-items-center float-end">
            <div className="d-block px-3 text-success">
            <FaCheckCircle className="text-success"/> <b>Published</b>
            </div>
            <div className="d-block">
            <button
                type="button"
                className="btn btn-light wd-button-style px-2"
            >
                <FaEllipsisV />
            </button>
            </div>
        </div>
        <br/>
        <br/>
        <hr style={{marginBottom: '0px'}}/><br/>
      <div className="flex-fill">Assignment Name</div>
      <input value={assignment?.title}
             className="form-control mb-2" />
             <hr/>
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light wd-button-style float-end"
            style={{marginTop: '0px',marginBottom: '0px'}}>
        Cancel
      </Link>
      <hr style={{marginTop: '70px'}}/>
    </div>
  );
}
export default AssignmentEditor;