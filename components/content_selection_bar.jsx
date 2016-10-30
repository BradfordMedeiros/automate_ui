



//var event_emitter = require("../internal_communication.js");
var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/content_selection_bar.css">');


var Scrollview = require("./widget_scrollview.jsx");
var Grid = require("./grid.jsx");

var ContentSelectionBar = React.createClass({
	
	render(){
	
		return (<div className="content_selection_bar">
		
			<div className="content_selection_bar_toggle"  onClick={()=>{
					$(".top_bar_accent, .top_bar_middle, .content_selection_bar_toggle").toggleClass("active");
					setTimeout(()=>{
						$(".content_selection_bar_toggle").toggleClass("active");
					},200);
				}
			}><a className="content_selection_bar_toggle_font">&#9776;</a></div>
			<div className="top_bar"></div>
			<div className="top_bar_middle">
				{this.props.content}
			</div>
			<div className="top_bar_accent"></div>
		</div>)
    }
});


module.exports = ContentSelectionBar;
