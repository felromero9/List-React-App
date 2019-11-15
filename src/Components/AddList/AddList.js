import React from "react";

import "../ListItem/Style.scss";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";
import ToggleDisplay from "react-toggle-display";

class AddList extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //toggle form button with TOGGLE DISPLAY FROM NPM - react-toggle-display
    this.setState({
      show: !this.state.show
    });
    console.log(this.state.show);
  }

  render() {
    return (
      <div>
        <p className="iconToggle">
          <span onClick={() => this.handleClick()}>
            <i className="fas fa-plus"> </i>
            {this.state.show ? "hide button" : "add item"}
          </span>
        </p>
        <ToggleDisplay if={this.state.show}>
          <div className={ this.state.show ? " showSubmitButton " : " hideSubmitButton " }>
            <form onSubmit={e => this.submitItem(e)}>
              <div className="field has-addons">
                <p className="control">
                  <input
                    placeholder="Item"
                    type="text"
                    id="addListInput"
                    className="input"
                    onChange={e => this.updateInput(e)}
                  />
                </p>
                <p className="control">
                  <Button>Add Item</Button>
                </p>
              </div>
            </form>
          </div>
        </ToggleDisplay>
      </div>
    );
  }

  updateInput = e => {
    this.setState({ item: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItemListFn(this.state.item);
    document.getElementById("addListInput").value = "";
    console.log('submit', this.state); // show me what added to the list
  };
}

export default AddList;
