import React from "react";
import ListItem from "../ListItem/ListItem";

class List extends React.Component {
  render() {
    const { items } = this.props;

    return (
      <div className="panel">
        {items.map((_item, _index) => {
          return (
            <ListItem
              createItemListFn={this.createItemList}
              key={_index}
              item={_item}
              modifyItemHandlerFn={() => this.props.modifyItemHandler(_index)}
              deleteItemsHandlerFn={() => {
                if (window.confirm("Are you sure to delete this item?")) {
                  this.props.deleteItemsHandlerFn(_index);
                }
              }}
              toggleItemListFn={() => this.props.toggleItemListFn(_index)}
              setItemToEdit={() => this.props.setItemToEdit(_item)}
            />
          );
        })}
      </div>
    );
  }

  createItemList = item => {
    this.props.createItemListFn(item);
  };
}

export default List;
