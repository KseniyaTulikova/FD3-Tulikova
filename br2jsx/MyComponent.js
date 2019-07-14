"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './Br2jsx.js';
import style from './style.css'

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
       <Br2jsx text = {text}/>,document.getElementById('container')
    );