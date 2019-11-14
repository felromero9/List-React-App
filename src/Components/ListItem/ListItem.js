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
            <span>
              <i className="item-style fas fa-pencil-alt"></i>
            </span>
            <span onClick={this.props.deleteItemsHandlerFn}>
              <i className="item-style fas fa-trash-alt"></i>
            </span>
          </span>
        </a>
      </div>
    );
  }

  toggleItemList = () => {
    
    this.props.toggleItemListFn(this.props.item);
    //window.location.reload(false);


    // this.props.createItemListFn(this.props.item);
     

    //this.setState({ isChecked: !this.state.isChecked });

    // let item = this.props.item;
    // item.completed = !this.props.item.completed;
    //localStorage.setItem("item", JSON.stringify(item));

    // if (this.state.isChecked) {
    //   this.setState({ isChecked: !this.state.isChecked,
    //   value: "fas fa-circle"});
    // } else {
    //   this.setState({ isChecked: !this.state.isChecked,
    //     value: "far fa-circle"});
    // }
    
    // this.forceUpdate();

   
  };
}

export default ListItem;
