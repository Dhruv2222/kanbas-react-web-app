import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../store";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";


const ReduxExamples = () => {
    const { message } = useSelector((state: LabState) => state.helloReducer);
  return(
    <div>
      <h2>Redux Examples</h2>
      <h2>{message}</h2>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  );
};

export default ReduxExamples;