import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

import AnimatedBoxes from './components/AnimatedBoxes';
import AnimatedItemList from './components/AnimatedItemList';
import BoxPanel from './components/BoxPanel';
import Logo from './components/Logo';

import HomePage from './views/HomePage';

const testAnimatedBoxes = (
  <AnimatedBoxes/>
);

const testAnimatedList = (
   <AnimatedItemList/>
);

const testLogo = (
   <BoxPanel customStyles={{ width: "auto", height: "auto", padding: "10px", margin: "5px" }} >
      <Logo/>
   </BoxPanel>
);

const testHomePage = (
   <HomePage/>
);

ReactDOM.render(
   testHomePage
   , document.getElementById('app')
);