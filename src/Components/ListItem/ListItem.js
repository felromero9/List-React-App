import React from "react";

import "./Style.css";

import "react-bulma-components/dist/react-bulma-components.min.css";


class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    

    return (
      <div className="panel-block is-hoverable"> 
        <a href="/#"  className={"itemStyle" + (item.completed ? " completed" : " ")}>
          <span className="small-margin"
            onClick={this.toggleItemList}>
            <i className={"far fa-circle" + (item.completed ? "" : "fas fa-circle ") }></i> 
          </span>
          <span className="textSpan">{ item.text }</span>
          <span className="small-margin"
            onClick={this.props.deleteItemsHandlerFn}>
            <i className="fas fa-trash-alt"></i>
          </span>
          <span>
          <i className="far fa-edit"></i>
          </span>
        </a>
      </div>
    );
  }

  toggleItemList = () => {
    this.props.updateItemListFn(this.props.item);
  };
}

export default ListItem;
