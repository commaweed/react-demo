import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import BoxPanel from '../../components/BoxPanel';
import FaCaretDown from 'react-icons/lib/fa/caret-down'
import { TweenMax }  from 'gsap';

const boxStyles = {
   width: "auto",
   height: "auto",
   padding: "10px",
   margin: "100px 50px 10px 50px"
};

class SearchForm extends Component {

   constructor(props) {
      super(props);
      this.state = {
         collapsed: false
      };
   }

   getTitle() {
      return (
         <div class="container" style={{margin: 0, padding: 0}} onClick={ this.onClick.bind(this) }>
            <div class="row" style={{padding: "10px"}}>
               <div class="col-lg-6"><p class="text-left"><b>Basic Form</b></p></div>
               <div class="col-lg-6"><p class="text-right"><span name="caret"><FaCaretDown/></span></p></div>
            </div>
         </div>
      );
   }

   onClick() {
      this.setState({ collapsed: !this.state.collapsed });
      let rotation = this.state.collapsed ? "180" : "360";
      this.addAnimation(this.animateCaret, { rotation: rotation});
   }

   animateCaret({ target, options }) {
      let caret = target[0].querySelector("span[name='caret']").firstChild;
      return TweenMax.to(caret, .3, {
         rotation: options.rotation
      });
   }

   render() {
      return (
         <BoxPanel customStyles={ boxStyles }>
            <Panel header={ this.getTitle() } collapsible defaultExpanded>
               Panel content
            </Panel>
         </BoxPanel>
      );
   }
}

export { SearchForm };