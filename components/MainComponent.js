import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import { DISHES } from '../shared/dishes.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
 
    return (
        <Menu dishes={this.state.dishes} />
    );
  }
}
  
export default Main;