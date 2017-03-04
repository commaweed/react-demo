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

         //<div style="z-index: 2000; overflow: visible; perspective: 600px; left: 50%; top: 45%; position: fixed; visibility: hidden; transform: matrix(1, 0, 0, 1, 0, 0);">
         //   <div style="opacity: 0; position: absolute; border: 1px solid rgb(170, 170, 170); background-color: rgb(255, 255, 255); border-radius: 14px; height: 154px; width: 154px; transform: translate(-50%, -50%) matrix(0.19999, 0, 0, 0.19999, 0, 0); display: none;" class="preloader-box"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(-0.00318, 0.00947, -0.00947, -0.00318, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(0.00669, 0.00743, -0.00743, 0.00669, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(0.00985, -0.00167, 0.00167, 0.00985, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(0.0043, -0.00902, 0.00902, 0.0043, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(-0.0045, -0.00892, 0.00892, -0.0045, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 39); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(-0.00973, -0.0023, 0.00221, -0.00975, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(97, 172, 40); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(-0.00825, 0.00564, -0.0061, -0.00791, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(98, 171, 41); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(-0.00173, 0.00984, -0.00999, -0.00001, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(98, 169, 44); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(0.00557, 0.0083, -0.00559, 0.00828, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //   <div style="position: absolute; border-radius: 50%; background-color: rgb(100, 166, 48); transform-origin: -42px 0px 0px; height: 15px; width: 15px; transform: matrix(0.0097, 0.00239, 0.00464, 0.00885, 42, 0); opacity: 0;" class="preloader-dot"></div>
         //</div>

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