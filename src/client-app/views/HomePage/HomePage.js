import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import BoxPanel from '../../components/BoxPanel';
import Logo from '../../components/Logo';
import { FaCaretDown } from 'react-icons/lib/fa'
import { TweenMax }  from 'gsap';

const boxStyles = {
   width: "auto",
   height: "auto",
   padding: "10px 10px 1px 10px",
   margin: "50px"
};

class HomePage extends Component {

   getTitle() {
      const title = (
         <div class="container" onClick={ this.onClick.bind(this) }>
            <div class="row">
               <div class="pull-left"><p class="text-left">Basic Form</p></div>
               <div class="pull-right"><p class="text-right"><FaCaretDown/></p></div>
            </div>
         </div>
      );

      return title;
   }

   onClick(event) {
      //broken
      this.addAnimation(({ target }) => {
         console.log(target);
         console.log(target.find('text-right'));

         return TweenMax.to(event.target, .3, {
            rotation: "+=180"
         });
      });
   }

   render() {
      return (
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <BoxPanel customStyles={ boxStyles }>
                     <Panel header={ this.getTitle() } collapsible defaultExpanded>
                        Panel content
                     </Panel>
                  </BoxPanel>
               </div>
            </div>
         </div>
      );
   }
}

export { HomePage };