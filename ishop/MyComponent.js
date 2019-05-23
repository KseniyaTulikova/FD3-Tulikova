let MyComponent = React.createClass({
    displayName: 'MyComponent',

    getDefaultProps : function() {
        return { nameOfShop: 'We have changed our name before you came, sorry!'}
    },

    propTypes : {
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                name: React.PropTypes.string,
                price: React.PropTypes.string,
                quantity: React.PropTypes.number.isRequired,
                url: React.PropTypes.string,
            })
        ),
        nameOfShop: React.PropTypes.string.isRequired,
    },

    render: function() {
        let productList = [];   

        function renderProduct(item) {
            let product = 
                React.DOM.div( {className: [item.name, "product-item"].join(' '), key: item.id},
                    React.DOM.img({className: 'img', src: `img/${item.src_name}.png`, alt: 'Photo of Mobile'}, ),
                    React.DOM.h2({className: 'productName'}, item.name),
                    React.DOM.div({className: 'description'}, 
                        React.DOM.div({className: 'Price'},
                            React.DOM.h3(null, 'Price:'),
                            React.DOM.div(null, item.price)
                        ),
                        React.DOM.div({className: 'Quantity'}, 
                            React.DOM.h3(null, 'Quantity:'),
                            React.DOM.div(null, item.quantity) 
                        ),
                    ),
    
                );
            productList.push(product);            
        };

        this.props.products.forEach(renderProduct);

        return React.DOM.div({className: 'ProductsList'},
            React.DOM.div({className: 'products'}, productList),
            );
    },

});