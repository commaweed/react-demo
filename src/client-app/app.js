import React from "react";
import ReactDOM from "react-dom";

//import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

import AnimatedBoxes from './components/AnimatedBoxes';
import AnimatedItemList from './components/AnimatedItemList';
import BoxPanel from './components/BoxPanel';
import Logo from './components/Logo';

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

const testLogo = (
   <BoxPanel width="auto" height="auto">
      <Logo/>
   </BoxPanel>
);

ReactDOM.render(
   testLogo
   , document.getElementById('app')
);