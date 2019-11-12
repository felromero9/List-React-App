import React from "react";

import "./Style.css";

import "react-bulma-components/dist/react-bulma-components.min.css";
import { Button } from "react-bulma-components";

class ListItem extends React.Component {
  render() {
    const { item } = this.props;
    

    return (
      <div>
        <form  className={"itemStyle" + (item.completed ? " completed" : " ")}>
          <span 
            onClick={this.toggleItemList}>
            <i className="far fa-circle"></i> 
          </span>
          
          { item.text }
                
        </form>
        <Button 
          onClick={this.props.deleteItemsHandlerFn}> delete
        </Button>
      </div>
    );
  }

  toggleItemList = () => {
    this.props.updateItemListFn(this.props.item);
  };
}

export default ListItem;
