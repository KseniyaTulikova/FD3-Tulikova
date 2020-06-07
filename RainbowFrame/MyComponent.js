"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './RainbowFrame.js';
import style from './style.css'

let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
        <RainbowFrame colors = {colors}>
            Hello!
        </RainbowFrame>,
    document.getElementById('container'));