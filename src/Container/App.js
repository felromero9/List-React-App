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
      <div className="main-container">  
        <List updateItemListFn = {this.updateItemList}
          items = {this.state.items} 
          deleteItemsHandlerFn={this.deleteItemsHandler}
          changed = {this.state.nameChangeHandler}/>
        <AddList  addItemListFn = { this.addItemList} />
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
      //return (item === _item) ? ( { text: item.text, completed: !item.completed }) : ( { _item } )
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

  /*findIndexItem = (items, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      console.log(itemIndex);
      return p.id === id;
      
    });
  }*/

  deleteItemsHandler = itemIndex => {
    // IMPORTANT !!  create a copy before manipulate 
    // const items = this.state.items.slice();
    const items = [...this.state.items]; 
    items.splice(itemIndex, 1);
    this.setState({ items: items });
    localStorage.setItem('items', JSON.stringify(this.state.items));
  };

}

export default App;
