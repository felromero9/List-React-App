import React from 'react';
import ListItem from '../ListItem/ListItem';


class List extends React.Component{

  render(){

    const { items } = this.props;

    return(
      <div>
        {
          items.map((_item, _index) => {
            return(
            <ListItem 
              updateItemListFn={this.updateItemList}
              key={_index} 
              item={_item} /> 
            )
          })
        }
      </div>
    );
  }

  updateItemList = (item) => {
    this.props.updateItemListFn(item);
  }

}

export default List;