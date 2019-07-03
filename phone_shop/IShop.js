"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from './product_component';

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
        shopName: this.props.nameOfShop,
        select_item_id: 0,

    }

    deleteProduct = (product_id) => {
        this.state.defaultProps.forEach((item,index) => {
            if(product_id == item.id ) {
                this.state.defaultProps.splice(index,1);
               this.setState((currState,props) => {
                   return {defaultProps: currState.defaultProps}
               });
            }
        } );
    }

    changeBackground = (id, selected) => {

        this.state.defaultProps.forEach((item, index) => {
            if (this.state.select_item_id == 0 && item.id == id) {
            //    this.setState({select_item_id: id,isSelected: true} ); заменила state на др выражение,но само изменение не происходит,в пропсах значение передаётся,а в state componenta product_component не передаётся,в чём может быть ошибка?
              return this.setState( (currState) => {return {select_item_id: currState.select_item_id = id, isSelected: currState.isSelected = true} } );

            } else if (this.state.select_item_id == item.id && this.state.isSelected == 'true') {
                return this.setState({select_item_id: 0 , isSelected: false});
            }
        });
    }

    render() {

       let productArray = this.state.defaultProps.map( (item) => {
                return( 
                    <ProductComponent
                        selected_item_id = {this.state.select_item_id}
                        nameOfShop = {this.state.shopName} 
                        product = {item} 
                        key = {item.id}
                        cbDeleteProduct =  {this.deleteProduct} 
                        selected = {this.state.isSelected} 
                        cdChangeBackground = {this.changeBackground}
                    /> 
                );                          
            }           
       );

       return (
            <div className ='IShop'> 
                <div className = 'header'>
                    <div>Name</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>URL</div> 
                    <div className = 'button'>Control!</div>
                </div>
                <div className = 'allProducts'>{productArray}</div>
        </div>
        )
        ;
    };
};

export default IShop;