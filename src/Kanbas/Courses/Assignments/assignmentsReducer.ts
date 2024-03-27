import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";


const initialState = {
    assignments: <any>[],
  assignment: {
     "_id": "A999", 
     "title": "Sample assignment title", 
     "course": "", 
     "description": "Sample assignment description", 
     "points": 100, 
     "dueDate": new Date("05/21/2024").toDateString(), 
     "avlFromDate": new Date("05/02/2024").toDateString(), 
     "untilDate": new Date("05/25/2024").toDateString()
  },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.assignments,
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment : any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment : any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

