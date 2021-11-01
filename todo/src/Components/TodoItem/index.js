import React from "react";
import "./style.css";

const TodoItem  =(props)=>{
  return (
    <>
      <li>
        {props.todos.name}
        <span onClick={() => props.deletitem(props.todos.id)}>
          X
        </span>
        <i onClick={()=> props.editeitem(props.todos.id)}> edite</i>
      </li>
    </>
  );
}
export default TodoItem;
