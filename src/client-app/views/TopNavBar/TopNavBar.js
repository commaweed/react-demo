import React, { Component } from 'react';

import BoxPanel from '../../components/BoxPanel';
import Logo from '../../components/Logo';

class TopNavBar extends Component {
   render() {
      return (
         <nav class="navbar navbar-fixed-top">
            <div class="container">
               <BoxPanel customStyles={{ margin: 0, width: '100%', height: '100%' }}>
                  <Logo/>
               </BoxPanel>
            </div>
         </nav>
      );
   }
}

export { TopNavBar };