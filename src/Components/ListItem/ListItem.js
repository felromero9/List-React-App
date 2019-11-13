import React from "react";

import "./Style.css";

import "react-bulma-components/dist/react-bulma-components.min.css";


class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    

    return (
      <div className="list is-hoverable"> 
        <a className={"list-itemStyle" + (item.completed ? " completed" : " ")}>
          <span 
            onClick={this.toggleItemList}>
            <i className="far fa-circle"></i> 
          </span>
          
          { item.text }
          <span 
          onClick={this.props.deleteItemsHandlerFn}>
        <i className="fas fa-trash-alt"></i>
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
