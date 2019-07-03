"use strict";

import React from 'react';

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
            prod: this.props.product,
            productComponent: 'product',
            selected: this.props.selected,
            selected_item_id: this.props.selected_item_id,
            blue: 'blue',
            white: 'white',
    }

    deleteProduct = (EO) => {
        console.log('ProductComponent: нажали кнопку с id - '+EO.target.id); 
        if(confirm('Вы точно хотите удалить этот товар?')){
            this.props.cbDeleteProduct(EO.target.id);    
        }
    }
    changeBackground = (EO) => {
        debugger;
        this.props.cdChangeBackground(EO.target.parentElement.id,EO.target.parentElement.selected);
    }

    render() {

        if (this.state.selected_item_id == this.state.prod.id && this.state.selected == 'true'){
             debugger;
            return  (
                <div className = {this.state.blue}
                        id = {this.state.prod.id}
                        selected = {this.state.selected}
                        onClick = {this.changeBackground}>
                            <div>{this.state.prod.name}</div>
                            <div>{this.state.prod.quantity}</div>
                            <div>{this.state.prod.price}</div>
                            <div>{this.state.prod.url_name}</div>
                            <div className = 'button'>
                                <input type = {'submit'} 
                                    id = {this.state.prod.id} 
                                    value= { 'Delete!'} 
                                    onClick= {this.deleteProduct}/>
                            </div>
                    </div>
            );
                
        } else {
            debugger;
                return(
                 <div className = {this.state.white}
                    id = {this.state.prod.id}
                    selected = {this.state.selected}
                    onClick = {this.changeBackground}>
                        <div>{this.state.prod.name}</div>
                        <div>{this.state.prod.quantity}</div>
                        <div>{this.state.prod.price}</div>
                        <div>{this.state.prod.url_name}</div>
                        <div className = 'button'>
                            <input type = {'submit'} 
                                id = {this.state.prod.id} 
                                value= { 'Delete!'} 
                                onClick= {this.deleteProduct}/>
                        </div>
                </div>
                );
            }    
    }
};

export default productComponent;