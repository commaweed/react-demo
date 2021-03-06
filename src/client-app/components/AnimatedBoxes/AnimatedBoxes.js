import React, { Component, PropTypes } from 'react';
import ReactDOM, { findDOMNode }  from 'react-dom';
import { TweenMax, TimelineMax }  from 'gsap'

import Box from '../Box';

/**
 * Example that uses Greensock (GSAP) and react refs to animate some boxes.
 */
class AnimatedBoxes extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const top = findDOMNode(this.top);
      const right = findDOMNode(this.right);
      const bottom = findDOMNode(this.bottom);
      const left = findDOMNode(this.left);

      let timeline = new TimelineMax({ repeat: -1, yoyo: true });
      timeline.to(top, .5, { y: "-200" });
      timeline.to(right, .5, { x: "200" });
      timeline.to(bottom, .5, { y: "200" });
      timeline.to(left, .5, { x: "-200" });
   }

   render() {
      return (
         <div id="loader" class="container">
            <Box ref={comp => this.top = comp}/>
            <Box ref={comp => this.right = comp}/>
            <Box ref={comp => this.bottom = comp}/>
            <Box ref={comp => this.left = comp}/>
         </div>

      );
   }
}

export { AnimatedBoxes };