import React from "react";
import ReactDOM from "react-dom";

//import 'bootstrap/dist/css/bootstrap.css';

import AnimatedBoxes from './components/AnimatedBoxes';
import AnimatedItemList from './components/AnimatedItemList';
import BoxPanel from './components/BoxPanel';

const testAnimatedBoxes = (
  <AnimatedBoxes/>
);

const testAnimatedList = (
   <AnimatedItemList/>
);

const testBoxPanel = (
   <BoxPanel width="200" height="300">
      <h3>Yo!!!</h3>
      <h4>Son!!</h4>
   </BoxPanel>
);

ReactDOM.render(
   testBoxPanel
   , document.getElementById('app')
);