import React, { useEffect,useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      // axios
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"
      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    
      const [module, setModule] = useState({
        id: "1", name: "Module 1",
        description: "This is module 1",
        course: "NJS001"
      });
  return (
    <div>
        <br/><br/><br/><br/>
      <h3>Working With Assignment Object</h3>
      <h4>Modifying Properties</h4>
      
      <h3>Using axios</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <br/><br/><br/><br/>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <br/><br/>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <br/><br/>
      <input 
        type="checkbox"
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        checked={assignment.completed}
        />
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <br/><br/><br/><br/>
      <h4>Working with Module object</h4>
      <h5>Get module object:</h5>
      <a href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <br/><br/>
      <h5>Get module name:</h5>
      <a href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>
      <br/><br/>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <a href={`http://localhost:4000/a5/module/name/${module.name}`}>
        Update Module Name
      </a>
      <br/><br/>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
      <a href={`http://localhost:4000/a5/module/description/${module.description}`}>
        Update Module description
      </a>
      <br/><br/>
      
    </div>
  );
}
export default WorkingWithObjects;