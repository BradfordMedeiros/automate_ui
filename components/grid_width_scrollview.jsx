


//var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/grid_width_scrollview.css">');


var Scrollview = require("./widget_scrollview.jsx");
var Grid = require("./grid.jsx");

var WidgetScrollview = React.createClass({
	
	getInitialState() {
		return { widgets: [] };  
	},
	
	
	// adds a widget and gives back an index to remove it
	addWidget(react_element){
		var current_state = this.state.widgets;
		current_state.push(react_element);
		this.setState({widgets: current_state});
		this.refs.the_grid.onAddItem(react_element,true);
	},
	
	// removes the widget by handle
	removeWidget(index){
		throw (new Error('not yet implemented'));
	},
	
	render(){
	
		window.add_widget = this.addWidget.bind(this);
		window.removeWidget = this.removeWidget.bind(this);
		window.state = this.state;
		
        return (<div className="main_container">
                    {/*<div className="components_grid_width_scrollview_container">
                        <Scrollview/>
                    </div>*/}
                    <div className="test_div" >
                        <Grid ref="the_grid" widgets={this.state.widgets}  onLayoutChange={()=>{} }/>
                    </div>
                </div>)
    }
});


module.exports = WidgetScrollview;
