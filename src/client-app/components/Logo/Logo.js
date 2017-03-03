import React, { Component, PropTypes } from 'react';
import { TweenLite, TimelineLite, Linear, Bounce }  from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

const LOGO = new (function() {
   this.value = "some value";
   this.obscure = new Array(this.value.length).join('?')
})();

class Logo extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      this.addAnimation(({target}) => {
         const logo = target[0].children[0];
         const lite = target[0].children[1];
         //const box = element.getBoundingClientRect();

         const anim = new TimelineLite();
         anim.to(logo, 2, {
            text: {
               value: LOGO.value,
               padSpace: true,
               ease: Linear.easeNone
            }
         });

         anim.fromTo(lite, 2,
            {
               y: -50,
               opacity: 0
            },
            {
               y: 0,
               opacity: 1,
               ease: Bounce.easeOut
            }
         );

         return anim;
      });
   }

   render() {

      const {
      } = this.props;

      return (
         <div styleName="wrapper">
            <div styleName="logo logo-effect">
               { LOGO.obscure }
            </div>
            &nbsp;
            <div styleName="lite lite-effect">
               Lite
            </div>
         </div>
      );
   }
}

Logo.propTypes = {
};

Logo.defaultProps = {
};

export { Logo };