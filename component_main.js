

var events = require("events");
var event_emitter = new events();

var components = {
	
	side_panel: require("./components/side_panel.js"),
	side_panel_right: require("./components/side_panel_right.js"),
	event_panel: require("./components/event_panel.jsx"),
	grid: require("./components/grid.jsx"),
	widget_scrollview: require("./components/widget_scrollview.jsx")

}

window.React= require("react");
window.ReactDOM = require("react-dom");
window.components = components;
window.components.event_emitter= event_emitter;
window.$ = require("jquery");



