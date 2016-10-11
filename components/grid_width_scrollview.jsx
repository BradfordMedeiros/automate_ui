


//var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/grid_width_scrollview.css">');


var Scrollview = require("./widget_scrollview.jsx");
var Grid = require("./grid.jsx");

var WidgetScrollview = React.createClass({
	
	
    render(){
        return (<div className="main_container">
                    <div className="components_grid_width_scrollview_container">
                        <Scrollview/>
                    </div>
                    <div className="test_div" >
                        <Grid  onLayoutChange={()=>{} }/>
                    </div>
                </div>)
    }
});


module.exports = WidgetScrollview;
