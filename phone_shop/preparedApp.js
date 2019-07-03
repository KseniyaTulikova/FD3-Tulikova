"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './IShop.js';


let companyName = 'IShop';
        let mobileProducrts = require('./products.json');
            ReactDOM.render(
                <IShop
                    nameOfShop = {companyName}
                    products = {mobileProducrts}
                    selected = {false}
                />,
                document.getElementById('container')
            );