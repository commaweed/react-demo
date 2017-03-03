import React, { Component, PropTypes } from 'react';
import { TweenMax, TimelineMax }  from 'gsap';

class ListItem extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount(quote, index) {
      this.addAnimation(this.mountAnimation);
   }

   mountAnimation({ target, options }) {
      return TweenMax.fromTo(target, .3, {
         x: '+=50',
         opacity: 0
      }, {
         x: '-=50',
         opacity: 1
      });
   }

   unmountAnimation({ target, options }) {
      return TweenMax.fromTo(target, .3, {
         x: '+=0',
         opacity: 1
      }, {
         x: '-=50',
         opacity: 0,
         clearProps: 'all',
         onComplete: () => {  options.onRemoveClick(options.data) }
      });
   }

   render() {

      const {
         data
      } = this.props;

      let handleButtonClick = () => {
         this.addAnimation(this.unmountAnimation, this.props);
      };

      return (
         <div class="container">
            <li styleName="list-group-item">
               {data}
               <button onClick={handleButtonClick.bind(this)} styleName="purple">Remove</button>
            </li>
         </div>
      );
   }
}

ListItem.propTypes = {
   data: PropTypes.string,
   onRemoveClick: PropTypes.func
};

export { ListItem };