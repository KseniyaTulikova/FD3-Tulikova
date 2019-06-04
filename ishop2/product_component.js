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

        this.props.cdChangeBackground(EO.target.parentElement.id);
    },

    render: function() {
        return React.DOM.div({className: ` ${this.state.product.class}`, id: this.state.product.id,selected: this.props.isSelected, onClick: this.changeBackground},
            React.DOM.div(null,this.state.product.name),
            React.DOM.div(null,this.state.product.quantity),
            React.DOM.div(null,this.state.product.price),
            React.DOM.div(null,this.state.product.url_name),
            React.DOM.div({className: 'button'},
                React.DOM.input({type:'submit', id: this.state.product.id, defaultValue: 'Delete!', onClick: this.deleteProduct})
            )
        );
    },
});