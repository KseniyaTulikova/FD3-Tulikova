'use strict'
import React from 'react';
import PropTypes from 'prop-types'


class Br2jsx extends React.Component {
    static propTypes = {
        text: PropTypes.string,
      };

      state = { 
        defaultText: this.props.text,
      }
      render(){
        let regExp = /(<([^>]+)>)/ig;
        let splitedText = this.state.defaultText.replace(regExp,',').split(',');
        let result = [];
        console.log(splitedText);
        
        splitedText.forEach((item) => {
         result.push(item);
         result.push(<br/>);

       }); 
        
        return result; 
      }
}
export default Br2jsx;