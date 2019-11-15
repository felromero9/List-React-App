import React from "react";

import "./Style.css";

import "react-bulma-components/dist/react-bulma-components.min.css";

class ListItem extends React.Component {

  render() {
    const {item} = this.props;

    return (
      <div className="panel-block is-paddingless">
        <a href="/#" className="has-text-black item-box">
          <span className="small-margin" onClick={this.props.toggleItemListFn}>
            <i className={item.completed? "fas fa-circle" : "far fa-circle"}></i>
          </span>

          <span className="textSpan">{item.text}</span>

          <span className="small-margin-right">
            <span onClick={() => this.props.setItemToEdit()}>
              <i className="editIcon item-style fas fa-pencil-alt"></i>
            </span>
            <span onClick={this.props.deleteItemsHandlerFn}>
              <i className="trashIcon item-style fas fa-trash-alt"></i>
            </span>
          </span>
        </a>
      </div>
    );
  }

  toggleItemList = () => {
    this.props.toggleItemListFn(this.props.item);
  };
}

export default ListItem;
