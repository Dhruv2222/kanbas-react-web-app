import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
// import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";



function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const [initialAddAssignment, setInitialAssignment] = useState({
    "_id": "A999", 
    "title": "Sample assignment title", 
    "course": "", 
    "description": "Sample assignment description", 
    "points": 100, 
    "dueDate": new Date("05/21/2024").toDateString(), 
    "avlFromDate": new Date("05/02/2024").toDateString(), 
    "untilDate": new Date("05/25/2024").toDateString()
 });
  const assignmentFromReduxTemp = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${
      date.getMonth() + 1
    }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  };

  const assignment = assignmentList.find(
    (assignment) => assignment._id === assignmentId);

  // const assignmentFromRedux = assignment || assignmentFromReduxTemp;

  // adding a new assignment
  let assignmentFromRedux = assignmentFromReduxTemp;
  // if (assignmentFromReduxTemp._id === 'A999' && assignment !== undefined) {
    if (assignment !== undefined && (assignmentFromReduxTemp._id === 'A999' || 
    assignmentFromRedux._id != assignmentId)) {
    console.log("taking values from existing assignment");
    assignmentFromRedux = assignment;
  }
  if (assignmentId === 'Add+' && assignmentFromReduxTemp._id !== 'A999' && 
  assignmentFromRedux._id !== 'A999') {
    assignmentFromRedux = initialAddAssignment
  }

  console.log("assignment--",assignment);
  console.log("assignmentFromReduxTemp--",assignmentFromReduxTemp);
  console.log("assignmentFromRedux--",assignmentFromRedux);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('course---',assignmentFromRedux.course);
    if (assignmentFromRedux.course === "") {
      console.log('adding');
      dispatch(addAssignment({ ...assignmentFromRedux, assignmentId: new Date().getTime().toString(),
        course: courseId }));
      
      
    }
    else{
      console.log('updating');
      dispatch(updateAssignment(assignmentFromRedux));
      
    }
    
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
      <input value={assignmentFromRedux.title}
             className="form-control mb-2" 
             onChange={(e) =>
              dispatch(setAssignment({ ...assignmentFromRedux, title: e.target.value }))
            }/>
             
             <div className="mb-3">
                <textarea
                  className="form-control"
                  id="assignment_description"
                  rows={4}
                  onChange={(e) =>
                    dispatch(setAssignment({ ...assignmentFromRedux, description: e.target.value }))
                  }
                >
{assignmentFromRedux.description}</textarea
                >
              </div>
              <div className="row">
                <div className="col-md-3 text-end">
                  <label htmlFor="assignment_points" className="form-label"
                    >Points</label
                  >
                </div>
                <div className="col mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="assignment_points"
                    value={assignmentFromRedux.points}
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignmentFromRedux, points: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="row">
              <div className="col-md-3 text-end">
                  <label htmlFor="edit-display-grade" className="form-label"
                    >Assign</label
                  >
                </div>
                <div className="col mb-3 form-group">
                  <div className="border p-2 wd-assign-border">
                    <div className="form-group">
                      <label htmlFor="edit-due-date"><b>Due</b></label>
                      <input
                        type="date"
                        className="form-control mb-3"
                        id="edit-due-date"
                        value={dateObjectToHtmlDateString(new Date(assignmentFromRedux.dueDate))}
                        onChange={(e) =>
                          dispatch(setAssignment({ ...assignmentFromRedux, dueDate: new Date(e.target.value).toDateString() }))
                        }
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="edit-available-date"
                          ><b>Available from</b></label
                        >
                        <input
                          type="date"
                          className="form-control"
                          id="edit-available-date"
                          value={dateObjectToHtmlDateString(new Date(assignmentFromRedux.avlFromDate))}
                          onChange={(e) =>
                            dispatch(setAssignment({ ...assignmentFromRedux, avlFromDate: new Date(e.target.value).toDateString() }))
                          }
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="edit-until-date"><b>Until</b></label>
                        <input
                          type="date"
                          className="form-control"
                          id="edit-until-date"
                          value={dateObjectToHtmlDateString(new Date(assignmentFromRedux.untilDate))}
                          onChange={(e) =>
                            dispatch(setAssignment({ ...assignmentFromRedux, untilDate: new Date(e.target.value).toDateString() }))
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-light border w-100 wd-add-button"
                  >
                    <i className="fa fa-plus"></i> Add
                  </button>
                </div>
                </div>
      
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