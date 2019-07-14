import React from 'react';

import { withRainbowFrame} from './withRainbowFrame.js';
import Fragment from './fragment.js';
class MyApp extends React.Component {

      render() {
        let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        let FramedFragment = withRainbowFrame(colors)(Fragment);
        
        return (
          <FramedFragment>Hello!</FramedFragment>
        );
      }
}
export default MyApp;