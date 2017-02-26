import React, { Component, PropTypes } from 'react';
import { TweenMax, TimelineMax }  from 'gsap';

class ListItem extends Component {

   constructor(props) {
      super(props);
   }

   componentWillMount(quote, index) {
      console.log('mounted');
      this.addAnimation(this.mountAnimation);
   }

   mountAnimation({ target, options }) {
      console.log('mountAnimation');
      return TweenMax.fromTo(target, 3, {
         x: '+=50',
         opacity: 0
      }, {
         x: '-=50',
         opacity: 1
      });
   }

   unmountAnimation({ target, options }) {
      console.log('unmountAnimation');
      return TweenMax.fromTo(target, 3, {
         x: '+=0',
         opacity: 1
      }, {
         x: '-=50',
         opacity: 0
      });
   }

   render() {

      const {
         data
      } = this.props;

      let handleButtonClick = () => {
         console.log('remove button clicked');

         this.addAnimation((target, options) => {
            console.log('remove animation', target);
            return TweenMax.fromTo(target, 0.3, {
               x: '+=0',
               opacity: 1
            }, {
               x: '-=50',
               opacity: 0
            });
         });

         this.props.onRemoveClick();
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