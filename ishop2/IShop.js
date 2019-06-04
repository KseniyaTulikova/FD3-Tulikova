let IShop = React.createClass({
    dipslayName: 'Ishop',
    getDefaultProps: '',
    getInitialState: function(){
        return {defaultProps: this.props.products,
                currentProd: '',
            isSelected:this.props.selected,
            background: 'blue',
         };
    },
    propTypes: {
        products: React.PropTypes.array,
        nameOfShop: React.PropTypes.string.isRequired,
    },
    deleteProduct: function(product_id) {
        this.state.defaultProps.forEach((item,index) =>{
            if(product_id == item.id ) {
                this.state.defaultProps.splice(index,1);
               this.setState((currState,props)=> {
                   return {defaultProps: currState.defaultProps}
               });
            }
        } );
    },
    changeBackground:function(id){
        let arr = [];
        this.state.defaultProps.forEach((item, index)=> {
            if(item.id == id && item.class == 'blue') {
                item.class = 'white';
                arr.push(item);
                
            }else if(item.id == id ){
                item.class = this.state.background;
                arr.push(item);
            }else {
                arr.push(item);
            } 
            return  this.setState((currState, props)=> {return {isSelected:currState.isSelected = true, defaultProps: currState.defaultProps = arr}})
        });
    },
    render: function() {
       let productArray = [];
        this.state.defaultProps.forEach( (item)=>{
        return productArray.push(React.createElement(productComponent, {nameOfShop: companyName, product: item, key: item.id, cbDeleteProduct: this.deleteProduct,selected: this.state.isSelected , backgr:'', cdChangeBackground:this.changeBackground}))
       }
       );
       return React.DOM.div({className: 'IShop'}, 
            React.DOM.div({className: 'header'},
                React.DOM.div(null,'Name'),
                React.DOM.div(null,'Quantity'),
                React.DOM.div(null,'Price'),
                React.DOM.div(null,'URL'),
                React.DOM.div({className: 'button'},'Control!')
            ),
            React.DOM.div({className: 'allProducts'}, productArray) 
        );
    },
} );