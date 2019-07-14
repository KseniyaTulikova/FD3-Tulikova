'use strict'
import React from 'react';
import PropTypes from 'prop-types'


class RainbowFrame extends React.Component {
    static propTypes = {
        color: PropTypes.array,
      };

      render(){
          let result = this.props.children;

          this.props.colors.forEach((color) => {
            result = <div style={{border:"solid 3px " + color, padding:"10px"}}>
                {result}
            </div>;
          } );

          return result;
      }
}
export default RainbowFrame;