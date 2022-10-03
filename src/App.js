import React from 'react';
import logo from './logo.svg';
import './App.css';
import './site.css';
import {Button,Card,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [todos, setTodos]= React.useState([
   
  ])

  const addTodo = todo =>{
    const newTodos = [...todos,todo]
    setTodos(newTodos);  
  }

  const markTodo = index =>
  {
    const newTodos=[...todos];
    newTodos[index].isDone =true;
    setTodos(newTodos);

  }

  const removeTodo =index =>
  {
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  function Todo({todo, index, markTodo, removeTodo})
  {
    return (
      <div className='todo'>
        <span style={{textDecoration : todo.isDone ? "line-through" : ""}}>{todo.text}</span>
        <div>
          <Button variant='outline-sucess' onClick={()=> markTodo(index)}> Done</Button>
          <Button variant='outline-danger' onClick={()=> removeTodo(index)}> Remove</Button>
        </div>

      </div>
    );
  }

function FormTodo({addTodo}){

  const [value, setValue] = React.useState("");
  const handleSubmit = e =>
  {
    e.preventDefault();
    if(!value) return;

    console.log(value)

    addTodo(value)
    setValue("");
  };

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group>      
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type='text' 
                      className='input' 
                      value={value} 
                      onChange={e=>setValue(e.target.value)} 
                      placeholder="Add new todo" />
      </Form.Group>
      <Button variant='primary mb-3' type='submit'> Submit</Button>
    </Form>
  );
  
}


  return (
    <div className="App">
      <div className="container">
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo,index) =>(

            <Card>
              <Card.Body>
                <Todo key={index} index={index} todo={todo} markTodo={markTodo} removeTodo={removeTodo} />
              </Card.Body>
            </Card>

          ))}
        </div>
       
      </div>
    </div>
  );
}

export default App;
