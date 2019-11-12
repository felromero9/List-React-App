import React from 'react';
import './Style.css';

class ListItem extends React.Component{

  render(){

    const { todo } = this.props;

    return(
      <div 
        className={ 'itemStyle' + (todo.completed ? ' completed': ' ' ) }
        onClick = {this.toggleItemList}>
        {todo.text}
      </div>
    );
  }

  toggleItemList = () => {
    this.props.updateItemListFn(this.props.todo);
  }

}

export default ListItem;