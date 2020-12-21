import React from 'react';

  const Todos = ({todos, deleteTodo}) => {
    const todoList = (todos.length>0) ? (
      todos.map(todo => {
        return(
          <div className= "collection-item" key={todo.id}>
            <span onClick={ (id) => {deleteTodo(todo.id)} }>{todo.context}</span>
          </div>
        );
      })
    ) : (
      <p className="center">You do not have any todo's. Yay!</p>
    );
    return (
      <div className="todos collection">
        {todoList}
      </div>
    );
  }

export default Todos;