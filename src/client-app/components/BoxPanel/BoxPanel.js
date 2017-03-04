import React, { Component, PropTypes } from 'react';

class BoxPanel extends Component {
   render() {
      const { customStyles, children } = this.props;

      return (
         <div styleName="wrapper" style={ Object.assign({}, customStyles) }>{ children }</div>
      );
   }
}

BoxPanel.propTypes = {
   customStyles: PropTypes.object,
   children: PropTypes.node
};

BoxPanel.defaultProps = {
   children: '<h1>nothing</h1>'
};

export { BoxPanel };