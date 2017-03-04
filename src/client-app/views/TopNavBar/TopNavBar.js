import React, { Component } from 'react';

import BoxPanel from '../../components/BoxPanel';
import Logo from '../../components/Logo';

class TopNavBar extends Component {
   render() {

      const styles = {
         //margin: 0,
         width: '100%',
         height: '100%',
         //position: 'absolute',
         //top: 0,
         //left: 0
      };

      return (
         <nav class="navbar navbar-fixed-top">
            <div class="container" style={{ padding: 0 }}>
               <BoxPanel customStyles={styles}>
                  <Logo/>
               </BoxPanel>
            </div>
         </nav>
      );
   }
}

export { TopNavBar };