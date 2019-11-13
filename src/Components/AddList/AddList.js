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
      <div style={{ margin: "1em" }}>
        <form onSubmit={(e) => this.submitItem(e)}>
          <div className="field has-addons">
            <p className="control">
              <input
                placeholder='Item'
                type='text'
                id='addListInput'
                className="input"
                onChange={(e) => this.updateInput(e)} />
            </p>
            <p className="control">
              <Button>Add Item To List</Button>
            </p>
          </div>
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