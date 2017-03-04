import CSSModules from 'react-css-modules';
import { SearchForm } from './SearchForm.js';
import styles from './SearchForm.scss';

import GSAP from 'react-gsap-enhancer';

export default GSAP()(CSSModules(SearchForm, styles));