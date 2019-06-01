let MyFilterComponent = React.createClass({
    displayName: 'MyFilterComponent',

    getDefaultProps: "",

    propTypes: {
        defaultInputText: React.PropTypes.string,
        defaulValueSelect: React.PropTypes.string,
        allStrings: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    getInitialState: function() {
        return {
            defaultProps: this.props.allStrings, 
            
        };
    },

    updateStateOfComponent: function() {
        
       return this.setState((currState,props)=> { return {changedState: currState.changedState = undefined, prevState: currState.prevState = undefined} });
    },

    wordFiltration: function(EO) {
        let isCheckedBool = EO.target.checked;
       if(EO.target.checked){
         this.setState((currState, props) => {
            let state = currState.changedState || currState.defaultProps;
            let previousState = JSON.parse(JSON.stringify(state)); 
            return {prevState: previousState, changedState: state.sort(), isChecked: isCheckedBool}; 
        });
            
       } else {
        this.setState((prevState, props) => { return {isChecked:prevState.isChecked = isCheckedBool}; });
       }
        
    },
    myTextChanged: function(EO){
          let changedStateArray = this.state.defaultProps.filter(item => item.search(EO.target.value) > -1);
          return this.setState({changedState: changedStateArray, prevState: changedStateArray});
    },
        

    render: function() {
        let optionStrings = [];

        function renderAllStrings(item, index){
            let string = React.DOM.option({key: `${index} + 1`}, item);
            
            optionStrings.push(string);
        }
       
    if(this.state.prevState !== undefined && this.state.changedState !== undefined && this.state.isChecked == true){
      this.state.changedState.forEach(renderAllStrings);  
      
    } else if (this.state.changedState !== undefined){
        this.state.prevState.forEach(renderAllStrings);
        
    } else {
        this.state.defaultProps.forEach(renderAllStrings);
        
    }

    return React.DOM.div({className: 'Filter'},
    React.DOM.form({className: 'inputFilter', id: 'MyForm'},
        React.DOM.input({type:'checkbox', onClick: this.wordFiltration},),
        React.DOM.input({type: 'text', name: 'inputText', defaultValue: this.props.defaultInputText, onChange: this.myTextChanged}),
        React.DOM.input({type:'reset', value: this.props.defaulValueSelect, onClick: this.updateStateOfComponent})
        ),
    React.DOM.select({className: 'str', size: this.props.allStrings.length - 1}, optionStrings)
    )   
    },
});