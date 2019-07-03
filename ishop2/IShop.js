"use strict";

import React from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import productComponent from './product_component.js';

import './IShop2.css';

class IShop extends React.Component {
    static propTypes = {
        products: PropTypes.array,
        nameOfShop: PropTypes.string.isRequired,
    };
    state = {
        defaultProps: this.props.products,
        currentProd: '',
        isSelected: this.props.selected,
        background: 'blue',
    }

    deleteProduct = (product_id) => {
        this.state.defaultProps.forEach((item,index) =>{
            if(product_id == item.id ) {
                this.state.defaultProps.splice(index,1);
               this.setState((currState,props)=> {
                   return {defaultProps: currState.defaultProps}
               });
            }
        } );
    }

    changeBackground = (id, selected) => {
        let arr = [];

        this.state.defaultProps.forEach((item, index)=> {
            if(item.id == id && item.class == 'blue' && this.state.isSelected == selected) {
                item.class = 'white';
                arr.push(item);
                
            }else if (item.id == id && item.class == 'white' && this.state.isSelected == false){
                debugger;
                item.class = this.state.background;
                arr.push(item);
            } else {
                arr.push(item);
            }
            return  this.setState((currState, props)=> {return {isSelected:(currState.isSelected == false)||(currState.isSelected == true)||(false), defaultProps: currState.defaultProps = arr}})
        });
    }

    render() {
       let productArray = [];
        this.state.defaultProps.forEach( (item)=>{
        return productArray.push(React.createElement(productComponent, {nameOfShop: companyName, product: item, key: item.id, cbDeleteProduct: this.deleteProduct,selected: this.state.isSelected , backgr:'', cdChangeBackground:this.changeBackground}))
       }
       );
       return ReactDOM.div({className: 'IShop'}, 
                ReactDOM.div({className: 'header'},
                ReactDOM.div(null,'Name'),
                ReactDOM.div(null,'Quantity'),
                ReactDOM.div(null,'Price'),
                ReactDOM.div(null,'URL'),
                ReactDOM.div({className: 'button'},'Control!')
            ),
            ReactDOM.div({className: 'allProducts'}, productArray) 
        );
    };
};

export default IShop;