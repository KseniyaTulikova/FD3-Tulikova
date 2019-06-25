"use strict";

import React from 'react';

import ReactDOM from 'react-dom';
import productComponent from './product_component.js';

import './product_component.css';

let productComponent = React.createClass({
    displayName: 'ProductComponent',
    getDefaultProps:'',
    getInitialState: function(){
        return {
                    product: this.props.product,
                    productComponent: 'product',
                };
    },
    propTypes: {
        products: React.PropTypes.shape({
            name: React.PropTypes.string,
            price: React.PropTypes.string,
            quantity: React.PropTypes.number.isRequired,
            url_name: React.PropTypes.string,
        }),
        nameOfShop: React.PropTypes.string.isRequired,
    },
    deleteProduct: function(EO){
        console.log('ProductComponent: нажали кнопку с id - '+EO.target.id); 
        if(confirm('Вы точно хотите удалить этот товар?')){
            this.props.cbDeleteProduct(EO.target.id);    
        }
    },
    changeBackground: function(EO){
        this.props.cdChangeBackground(EO.target.parentElement.id,EO.target.parentElement.selected);
    },

    render: function() {
        return ReactDOM.div({className: ` ${this.state.product.class}`, id: this.state.product.id,selected: (this.state.product.class == 'blue'? true : false), onClick: this.changeBackground},
            ReactDOM.div(null,this.state.product.name),
            ReactDOM.div(null,this.state.product.quantity),
            ReactDOM.div(null,this.state.product.price),
            ReactDOM.div(null,this.state.product.url_name),
            ReactDOM.div({className: 'button'},
                ReactDOM.input({type:'submit', id: this.state.product.id, defaultValue: 'Delete!', onClick: this.deleteProduct})
            )
        );
    },
});

export default productComponent;