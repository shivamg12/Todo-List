import React from "react";



function Form({setInputText, setTodos, todos, inputText, setStatus}){
   const inputtext=(e)=>{
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodos=(e)=>{
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random()*1000},
    ]);
    setInputText("");
  };
  const statusHandler=(e)=>{
    setStatus(e.target.value);
  }
    return(
        <form>
      <input value={inputText} onChange={inputtext} type="text" className="todo-input" />
      <button onClick={submitTodos} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>

    );
};
export default Form;