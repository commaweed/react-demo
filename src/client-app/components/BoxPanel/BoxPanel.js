import React, { Component, PropTypes } from 'react';

class BoxPanel extends Component {
   render() {
      const { width, height, children } = this.props;

      return (
         <div styleName="wrapper" style={{width:width,height:height}}>{children}</div>
      );
   }
}

BoxPanel.propTypes = {
   width: PropTypes.string,
   height: PropTypes.string,
   children: PropTypes.node
};

BoxPanel.defaultProps = {
   width: 'auto',
   height: 'auto',
   children: '<h1>nothing</h1>'
};

export { BoxPanel };