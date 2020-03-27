import React, {Component} from "react";
import _products from "../products";
import IconSwitch from "../icon-switch/";
import CardsView from "../cards-view";
import ListView from "../list-view";

export default class Store extends Component {
  state = {
    icon: "view_list",
    products: _products
  };

  onSwitch = () => {
    if (this.state.icon === "view_list") {
      this.setState({
        icon: "view_module"
      });
    } else {
      this.setState({
        icon: "view_list"
      });
    }
  };

  render() {
    const {icon, products} = this.state;

    return (
      <div>
        <IconSwitch icon={icon} onSwitch={this.onSwitch} />
        {icon === "view_list" ? (
          <CardsView cards={products} />
        ) : (
          <ListView items={products} />
        )}
      </div>
    );
  }
}
