import React from 'react';

class AddList extends React.Component{
  constructor(){
    super();
    this.state = {
      todo: ''
    };
  }
  
  render(){
    return(
      <div className='addListContainer'>
        <form onSubmit={(e) => this.submitItem(e)}>
          <input type='text' 
            id='addListInput'
            onChange={(e) => this.updateInput(e)} />
          <button type='submit' >Add Item To List</button>
        </form>
          
      </div>
    );
  }

  updateInput = e => {
    this.setState({ todo: e.target.value });//event in th
  }

  submitItem = (e) => {
    e.preventDefault();
   // console.log('submit', this.state); // show me what added to the list
    this.props.addItemListFn(this.state.todo);
    document.getElementById('addListInput').value = '';
  }

}

export default AddList;