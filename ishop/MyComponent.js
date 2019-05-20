let MyComponent = React.createClass({
    displayName: 'MyComponent' ,

    render: function() {
        return React.DOM.div( {className : 'MyComponentIShop'},
            React.DOM.h1( null, 'Всем привет!'),
            React.DOM.div( {className: 'IShopText'}, "Get Started!")
        );
    },
});