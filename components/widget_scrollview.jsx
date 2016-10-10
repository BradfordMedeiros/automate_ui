

//var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/widget_scrollview.css">');

var style ={
	width: '50%'
}
var Widget = React.createClass({
	render(){
		return (<div style={style} className="widget_scrollview_widget_preview">{this.props.value}</div>);
	}
});


var WidgetScrollview = React.createClass({
	
	things: ['a','b',123],
	
    render(){
			console.log('scroll view called');
			return (
			<div className="container">
				<div className="components_widget_scrollview">
					{this.things.map((x,i)=><Widget key={i} value={x}></Widget>) }
				</div>
			</div>);
    }
});


module.exports = WidgetScrollview;
