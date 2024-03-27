import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";


const initialState = {
  modules: <any>[],
  module: {
    _id: "12345",
    name: "New Module",
    description: "New Description",
    course: "", 
    lessons: [{_id: "123", name: "Sample lesson", description: "Sample description", module: "SampleModule"}]
  },
};


const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.modules,
      ];
    },
    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module : any) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module : any) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});


export const { addModule, deleteModule,
  updateModule, setModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;

