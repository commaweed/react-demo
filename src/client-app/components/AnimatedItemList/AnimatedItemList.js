import React, { Component, PropTypes } from 'react';
import Faker from 'faker';
import _ from 'ramda';
import ListItem from '../ListItem';

class AnimatedItemList extends Component {

   constructor(props) {
      super(props);

      this.state = {
         quotes: []
      };
   }

   handleAddClick() {
      const quote = Faker.lorem.sentence();
      this.setState({
         // immutable quotes
         quotes: [ ...this.state.quotes, quote ]
      });
   }

   handleRemoveClick(quote) {
      this.setState({
         quotes: _.without(quote, this.state.quotes)
      });
   }

   renderQuotes() {
      return this.state.quotes.map((item, index) => {
         return (
            <ListItem data={item} onRemoveClick={this.handleRemoveClick.bind(this, item)} key={index} />
         );
      });
   }

   render() {
      return (
         <div class="container">
            <button onClick={this.handleAddClick.bind(this)} styleName="green">Add</button>
            <ul styleName="list-group">
               {this.renderQuotes() }
            </ul>
         </div>
      );
   }
}

export { AnimatedItemList };