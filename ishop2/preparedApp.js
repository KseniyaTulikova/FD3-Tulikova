"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './IShop.js';
import productComponent from './product_component.js';


let companyName = 'IShop';
        let mobileProducrts = [
            {
                name: 'Google Phone', price: '250$', quantity: 5, id: 111, url_name: 'icon1', class: 'white' 
            },
            {
                name: 'Xiaomi Mi 5s', price: '115$', quantity: 50, id: 222, url_name: 'icon2',class: 'white'
            },
            {
                name: 'Appele IPhone', price: '200$', quantity: 3, id: 333, url_name: 'icon3',class: 'white'
            },
            {
                name: 'Sony Xperia Z1', price: '150$', quantity: 25, id: 444, url_name: 'icon4',class: 'white'
            },
            {
                name: 'Huawei P30', price: '215$', quantity: 15, id: 555, url_name: 'icon5',class: 'white'
            },
            {
                name: 'Google Nexus', price: '240$', quantity: 55, id: 666, url_name: 'icon6',class: 'white'
            },
            {
                name: 'Xiaomi Mi 9', price: '150$', quantity: 43, id: 777, url_name: 'icon7',class: 'white'
            },
            {
                name: 'Apple IPhone X', price: '500$', quantity: 28, id: 888, url_name: 'icon8',class: 'white'
            },
            {
                name: 'Samsung Q56', price: '200$', quantity: 1, id: 999, url_name: 'icon9',class: 'white'
            },
            
        ];

            ReactDOM.render(
                React.createElement(IShop, {nameOfShop: companyName, products: mobileProducrts, selected: false}),
                document.getElementById('container')
            );