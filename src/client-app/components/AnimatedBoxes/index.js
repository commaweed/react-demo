import CSSModules from 'react-css-modules';
import { AnimatedBoxes } from './AnimatedBoxes.js';
import styles from './AnimatedBoxes.scss';
//import GSAP from 'react-gsap-enhancer';

//export default CSSModules(GSAP()(AnimatedBoxes), styles);
export default CSSModules(AnimatedBoxes, styles);