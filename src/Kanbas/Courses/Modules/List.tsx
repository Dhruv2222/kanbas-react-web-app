import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import { KanbasState } from "../../store";
import * as client from "./client";



function ModuleList() {
  let moduleList = useSelector((state: any) => 
    state.modulesReducer.modules);
    
    if (moduleList.length === 0) {
      moduleList = [{
        _id: "12345",
        name: "New Module",
        description: "New Description",
        course: "", 
        lessons: [{_id: "123", name: "Sample lesson", description: "Sample description", module: "SampleModule"}]
      }]
    }

  const module = useSelector((state: any) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: any) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client.findModulesForCourse(courseId) 
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]); 

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  
  

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button 
        className="btn btn-outline-success m-1 px-1"
        onClick={handleAddModule}>Add</button>
        <button 
        className="btn btn-outline-primary m-1 px-1"
        onClick={handleUpdateModule}>
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

        {moduleList.length > 0 && moduleList
        .filter((module : any) => module.course === courseId)
        .map((module : any) => (
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
              onClick={() => handleDeleteModule(module._id)}>
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