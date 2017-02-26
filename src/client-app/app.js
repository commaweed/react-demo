import React from "react";
import ReactDOM from "react-dom";

//import 'bootstrap/dist/css/bootstrap.css';

import AnimatedBoxes from './components/AnimatedBoxes';

const testAnimatedBoxes = (
  <AnimatedBoxes/>
);

ReactDOM.render(
   testAnimatedBoxes
   , document.getElementById('app')
);