import React from "react";
import ReactDOM from "react-dom";

//import 'bootstrap/dist/css/bootstrap.css';

import AnimatedBoxes from './components/AnimatedBoxes';
import AnimatedItemList from './components/AnimatedItemList';

const testAnimatedBoxes = (
  <AnimatedBoxes/>
);

const testAnimatedList = (
   <AnimatedItemList/>
);

ReactDOM.render(
   testAnimatedList
   , document.getElementById('app')
);