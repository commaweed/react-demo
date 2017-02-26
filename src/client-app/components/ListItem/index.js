import CSSModules from 'react-css-modules';
import { ListItem } from './ListItem.js';
import styles from './ListItem.scss';
import GSAP from 'react-gsap-enhancer';

let animatedListItem = CSSModules(ListItem, styles);
export default GSAP()(animatedListItem);