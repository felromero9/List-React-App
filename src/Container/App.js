import React from 'react';

//import CheckIcon from '@material-ui/icons/Check';


import List from '../Components/List/List';
import AddList from '../Components/AddList/AddList';

import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
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
          items = {this.state.items} />
      </div>
    )
  }

  componentDidMount = () =>{
    const items = localStorage.getItem('items');
  // (items)? console.log('Has items', items) : console.log('No items');
    if(items){
    const savedItems = JSON.parse(items);
    this.setState({ items: savedItems});
    }
      else{
        console.log('No items');
    }
  }

  // adding the items in the addItemListFn function in Addlist component, converting the function into asynchronous   
  addItemList = async (item) => {
    //console.log(item);
    // will wait for the state update
    await this.setState({ items: [...this.state.items, {
      text: item,
      completed: false //item it convert in object 
    }] }); 
    localStorage.setItem('items', JSON.stringify(this.state.items)); // then will save into the local storage
    console.log(localStorage.getItem('items'));
  } 

  updateItemList =  async (item) => {
    const newItemList = this.state.items.map( _item =>{
      //return (item === item) ? ( { text: item.text, completed: !item.completed }) : ( { _item } )
      if(item === _item)
        return{
          text: item.text, 
          completed: !item.completed
        }
        else 
          return _item
    });
    await this.setState ({ items: newItemList });
    localStorage.setItem('items', JSON.stringify(this.state.items));
    console.log(newItemList);
  }

}

export default App;
