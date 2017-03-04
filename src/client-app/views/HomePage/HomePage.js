import React, { Component, PropTypes } from 'react';
import { Panel } from 'react-bootstrap';

import SearchForm from '../SearchForm';
import BoxPanel from '../../components/BoxPanel';
import Logo from '../../components/Logo';

class HomePage extends Component {

   render() {
      return (
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <SearchForm/>
               </div>
            </div>
         </div>
      );
   }
}

export { HomePage };