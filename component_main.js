

var events = require("events");
var event_emitter = new events();

var components = {
	
	side_panel: require("./components/side_panel.js"),
	side_panel_right: require("./components/side_panel_right.js"),
	event_panel: require("./components/event_panel.jsx"),
	grid: require("./components/grid.jsx"),
	widget_scrollview: require("./components/widget_scrollview.jsx"),
    grid_with_scrollview: require("./components/grid_width_scrollview.jsx"),
	content_selection_bar: require("./components/content_selection_bar.jsx")

}

export { components }



