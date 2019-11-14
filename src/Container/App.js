import React from "react";

//import CheckIcon from '@material-ui/icons/Check';

import List from "../Components/List/List";
import AddList from "../Components/AddList/AddList";

import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div className="main-container">
        <List
          createItemListFn={this.createItemList}
          items={this.state.items}
          deleteItemsHandlerFn={this.deleteItemsHandler}
          changed={this.state.nameChangeHandler}
          modifyItemHandlerFn={this.modifyItemHandler}
          toggleItemListFn={this.toggleItemListHandler}
        />
        <AddList addItemListFn={this.addItemList} />
      </div>
    );
  }

  componentDidMount = () => {
    const items = localStorage.getItem("items");
    // (items)? console.log('Has items', items) : console.log('No items');
    if (items) {
      const savedItems = JSON.parse(items);
      this.setState({ items: savedItems });
    } else {
      console.log("No items");
    }
  };

  // adding the items in the addItemListFn function in Addlist component, converting the function into asynchronous
  addItemList = async item => {
    //console.log(item);
    // will wait for the state update
    await this.setState({
      items: [
        ...this.state.items,
        {
          text: item,
          completed: false, //item it convert in object
          editMode: true
        }
      ]
    });
    localStorage.setItem("items", JSON.stringify(this.state.items)); // then will save into the local storage
    console.log(localStorage.getItem("items"));
  };

  createItemList = async item => {
    const newItemList = this.state.items.map(_item => {
      //return (item === _item) ? ( { text: item.text, completed: !item.completed }) : ( { _item } )
      if (item === _item)
        return {
          text: item.text,
          completed: !item.completed,
          editMode: true
        };
      else return _item;
    });
    await this.setState({ items: newItemList });
    localStorage.setItem("items", JSON.stringify(this.state.items));
  };

  /*findIndexItem = (items, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      console.log(itemIndex);
      return p.id === id;
      
    });
  }*/

  modifyItemHandler = (itemIndex, itemNewTxt) => {
    const items = [...this.state.items];
    items[itemIndex].setState({ editMode: true });
    localStorage.setItem("items", JSON.stringify(this.state.items));
    console.log(this.state.items);
  };

  deleteItemsHandler = itemIndex => {
    // create a copy before manipulate
    // const items = this.state.items.slice();
    const items = [...this.state.items];
    console.log("DELETE-BEFORE:Items from storage:", localStorage.getItem("items"));

    items.splice(itemIndex, 1);
    this.setState({ items: items });
    localStorage.setItem("items", JSON.stringify(items));
    console.log("DELETE-AFTER:Items from storage:", localStorage.getItem("items"));
  };

  toggleItemListHandler = async itemIndex => {
    const items = [...this.state.items];
    console.log("BEFORE:Items from storage:", localStorage.getItem("items"));

    items[itemIndex].completed = !items[itemIndex].completed;
    this.setState({items: items});
    localStorage.setItem("items", JSON.stringify(items));
    
    console.log("AFTER:Items from storage:", localStorage.getItem("items"));
    window.location.reload(false);
  }
}

export default App;
