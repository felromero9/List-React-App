import React from 'react';
import ListItem from '../ListItem/ListItem';


class List extends React.Component{

  render(){

    const { todos } = this.props;

    return(
      <div className='listContainer'>
        {
          todos.map((_todo, _index) => {
            return(
            <ListItem 
              updateItemListFn={this.updateItemList}
              key={_index} 
              todo={_todo} /> 
            )
          })
        }
      </div>
    );
  }

  updateItemList = (todo) => {
    this.props.updateItemListFn(todo);
  }

}

export default List;