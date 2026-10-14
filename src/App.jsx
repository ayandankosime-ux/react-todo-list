import { useState } from 'react'
import './App.css'

function TodoInput({ inputText, setInputText, todos }) {
  

  function saveInputText(event) {
    setInputText(event.target.value);
    console.log(inputText);
  }
  
  function addTodo() {
    todos.push(<Todo todoName={inputText}/>);
    console.log(todos)
  }

  return (
    <>
      <div className="add-todo-container">
        <input className='todo-input' placeholder='Add todo here...' onChange={saveInputText}/>
        <button className='btn-add-todo js-btn-add-todo' onClick={addTodo}>+ Add Todo</button>
      </div>
    </>
  );
}


function Todo({todoName}) {
  return (
    <div className="note">
      <input type='checkbox' />
      <p>{todoName}</p>
      <button className="btn-delete">X</button>
    </div>
  );
}

function App() {
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([{
    title: 'Wash the dishes',
    id: '1'
  }, {
    title: 'Code Something',
    id: '2'
  },{
    title: 'Do homework',
    id: '3'
  }]);

  const todosComponent = todos.map((todo) => {
    return (<Todo todoName={todo.title}/>)
  })

  console.log(todos);

  
  return (
    <>
      <div className="app-container">
        <div className="notes-container">
          <h1>Todo List</h1>
          <TodoInput inputText={inputText} setInputText={setInputText} todos={todos}/>
          <div className="notes-box">
            {todosComponent}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
