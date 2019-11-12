import React from 'react';
import List from './List/List';
import AddList from './AddList/AddList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }
  
  render(){
    return(
      <div> 
        <h1>
         List App!
       </h1>
        <AddList  addItemListFn = { this.addItemList}  /> 
        <List updateItemListFn = {this.updateItemList}
          todos = {this.state.todos} />
      </div>
    )
  }

  componentDidMount = () =>{
    const todos = localStorage.getItem('todos');
  // (todos)? console.log('Has todos', todos) : console.log('No todos');
    if(todos){
    const savedTodos = JSON.parse(todos);
    this.setState({ todos: savedTodos});
    }
      else{
        console.log('No todos');
    }
  }

  // adding the items in the addItemListFn function in Addlist component, converting the function into asynchronous   
  addItemList = async (todo) => {
    //console.log(todo);
    // will wait for the state update
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false //todo it convert in object 
    }] }); 
    localStorage.setItem('todos', JSON.stringify(this.state.todos)); // then will save into the local storage
    console.log(localStorage.getItem('todos'));
  } 

  updateItemList =  async (todo) => {
    const newItemList = this.state.todos.map( _todo =>{
      //return (todo === _todo) ? ( { text: todo.text, completed: !todo.completed }) : ( { _todo } )
      if(todo === _todo)
        return{
          text: todo.text, 
          completed: !todo.completed
        }
        else 
          return _todo
    });
    await this.setState ({ todos: newItemList });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(newItemList);
  }

}

export default App;
