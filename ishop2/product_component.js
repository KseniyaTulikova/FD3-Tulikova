"use strict";

import React from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './product_component.css';
class productComponent extends React.Component {
    // displayName = 'ProductComponent';
    // getDefaultProps ='';
   
    static propTypes =  {
        products: PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.string,
            quantity: PropTypes.number.isRequired,
            url_name: PropTypes.string,
        }),
        nameOfShop: PropTypes.string.isRequired,
    }; 
    state = { 
            product: this.props.product,
            productComponent: 'product',
    }

    deleteProduct = (EO) => {
        console.log('ProductComponent: нажали кнопку с id - '+EO.target.id); 
        if(confirm('Вы точно хотите удалить этот товар?')){
            this.props.cbDeleteProduct(EO.target.id);    
        }
    }
    changeBackground = (EO) => {
        this.props.cdChangeBackground(EO.target.parentElement.id,EO.target.parentElement.selected);
    }

    render() {
        return ReactDOM.div({className: ` ${this.state.product.class}`, id: this.state.product.id,selected: (this.state.product.class == 'blue'? true : false), onClick: this.changeBackground},
            ReactDOM.div(null,this.state.product.name),
            ReactDOM.div(null,this.state.product.quantity),
            ReactDOM.div(null,this.state.product.price),
            ReactDOM.div(null,this.state.product.url_name),
            ReactDOM.div({className: 'button'},
                ReactDOM.input({type:'submit', id: this.state.product.id, defaultValue: 'Delete!', onClick: this.deleteProduct})
            )
        );
    }
};

export default productComponent;