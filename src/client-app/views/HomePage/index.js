import CSSModules from 'react-css-modules';
import { HomePage } from './HomePage.js';
import styles from './HomePage.scss';

import GSAP from 'react-gsap-enhancer';

export default GSAP()(CSSModules(HomePage, styles));