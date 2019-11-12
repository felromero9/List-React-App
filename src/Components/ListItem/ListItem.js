import React from 'react';
import './Style.css';

class ListItem extends React.Component{

  render(){

    const { item } = this.props;

    return(
      <div 
        className={ 'itemStyle' + (item.completed ? ' completed': ' ' ) }
        onClick = {this.toggleItemList}>
        {item.text}
      </div>
    );
  }

  toggleItemList = () => {
    this.props.updateItemListFn(this.props.item);
  }

}

export default ListItem;