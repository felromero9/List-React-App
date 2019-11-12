import React from 'react';

//import '../../Sass/App.sass';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';



class AddList extends React.Component{
  constructor(){
    super();
    this.state = {
      item: ''
    };
  }
  
  render(){
    return(
      <div>
        <form onSubmit={(e) => this.submitItem(e)}>
          <input 
            placeholder = 'Item'
            type='text' 
            id='addListInput'
            onChange={(e) => this.updateInput(e)} />
           <Button 
              className='button is-small'
              type='submit'> Add Item To List
          </Button>
        </form>
      </div>
    );
  }

  updateInput = e => {

    this.setState({ item: e.target.value });
  }

  submitItem = (e) => {
    e.preventDefault();
   // console.log('submit', this.state); // show me what added to the list
    this.props.addItemListFn(this.state.item);
    document.getElementById('addListInput').value = '';
  }

}

export default AddList;