import React, { Component, PropTypes } from 'react';

class LoadMask extends Component {

   constructor(props) {
      super(props);
   }

   componentDidMount() {

   }

   render() {

      const {
      } = this.props;

      return (
         <div id="loader" class="container" >

         </div>

      );
   }
}

LoadMask.propTypes = {
   //message: PropTypes.string,
   //indicator: PropTypes.boolean,
   //visible: PropTypes.boolean
};

LoadMask.defaultProps = {
   //message: 'Loading...',
   //indicator: true,
   //visible: true
};

export { LoadMask };