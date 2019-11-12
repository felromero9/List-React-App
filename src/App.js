import React from 'react';
import './App.css';
import List from './List/List';
import AddList from './AddList/AddList';

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
        <List updateItemListFn = {this.updateItemList}
          todos = {this.state.todos} />
        <AddList  addItemListFn = { this.addItemList}  /> 
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
      completed: false
    }] }); 
    localStorage.setItem('todos', JSON.stringify(this.state.todos)); // then will save into the local storage
    console.log(localStorage.getItem('todos'));
  } 

  updateItemList = (todo) => {
    const newItemList = this.state.todos.map( _todo =>{
      return (todo === _todo) ? ( { text: todo.text, completed: !todo.completed }) :( { _todo } )
    });
    this.setState ({ todos: newItemList });
    console.log(newItemList);

  }

}

export default App;
