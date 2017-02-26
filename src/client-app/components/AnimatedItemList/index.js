import CSSModules from 'react-css-modules';
import { AnimatedItemList } from './AnimatedItemList.js';
import styles from './AnimatedItemList.scss';

import GSAP from 'react-gsap-enhancer';


let test = CSSModules(AnimatedItemList, styles);

export default GSAP()(test);