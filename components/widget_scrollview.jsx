

//var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");
var event_emitter = require("../internal_communication.js");

$('head').append('<link rel="stylesheet" type="text/css" href="components/widget_scrollview.css">');

var style ={
	width: '50%'
}

function broadcast_add_widget_request( widget ){
	console.log('broadcasting', widget);
	event_emitter.emit("widgets:add_widget",widget);
}

var Widget = React.createClass({
	render(){
		var component = (new this.props.value).get_react_component()
		return (<div className="widget_scrollview_widget_preview" onClick={()=>{
			broadcast_add_widget_request(this.props.value);
		}}> {component}</div>);
	}
});


var WidgetScrollview = React.createClass({
	

	
    render(){
			console.log('scroll view called');
			
			var the_widgets = Object.keys(this.props.widgets).map(key=>this.props.widgets[key]);
			return (
			<div className="container">
				<div className="components_widget_scrollview">
					{the_widgets.map((x,i)=><Widget key={i} value={x}></Widget>) }
				</div>
			</div>);
    }
});


module.exports = WidgetScrollview;
