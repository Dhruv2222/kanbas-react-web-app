import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();





  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button 
        className="btn btn-outline-success m-1 px-1"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button 
        className="btn btn-outline-primary m-1 px-1"
        onClick={() => dispatch(updateModule(module))}>
                Update
        </button>

        <input
        className="m-1 px-1"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          className="mx-1"
          rows={1}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
          </div>
      </li>

        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
              

              
            <div>
              
              <FaEllipsisV /> <GoTriangleRight className="me-1" />
              {module.name}
              <span className="float-end">
              <button className="btn btn-outline-primary mx-1 px-1"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
                <button className="btn btn-outline-danger mx-1 px-1"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
                <FaCheckCircle className="text-success" /> <GoTriangleDown />
                <FaPlus className="ms-2" style={{color: "gray"}} />
                <FaEllipsisV className="ms-2" style={{color: "gray"}} />
                
              </span>
              
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson : any) => (
                  <li className="list-group-item">

                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );

}
export default ModuleList;