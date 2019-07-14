'use strict'
import React from 'react';


function withRainbowFrame (colors) {
      return function (Component){  
        
         return  props => {
           let result = <Component {...props}/>;
            colors.forEach((color) => {
              result = <div style={{border:"solid 3px " + color, padding:"10px"}}>
                {result}
              </div>
            }
           )
           return result;
           
         };
        };
}
export {withRainbowFrame};
