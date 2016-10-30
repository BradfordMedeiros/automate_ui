
var $ = require("jquery");
$('head').append('<link rel="stylesheet" type="text/css" href="node_modules/react-grid-layout/css/styles.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="node_modules/react-resizable/css/styles.css">');
$('head').append('<link rel="stylesheet" type="text/css" href="components/grid.css">');
	
	
var React = require('react');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
var _ = require('lodash');
var WidthProvider = require('react-grid-layout').WidthProvider;
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
var ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var AddRemoveLayout = React.createClass({
  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 100
    };
  },

  getInitialState() {
    return {
      items: [].map(function(i, key, list) {
        return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
      }),
      newCounter: 0
    };
  },

  createElement(el) { 
    
	console.log("creating element");
	console.log(el);
	var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
	
	
    var i = el.add ? '+' : el.i;
	
    return (
      <div className="components_grid_outer_widget" id={'test_widget_'+i} key={i} data-grid={el}>
		{/*<span className="text">{i}</span>*/}		
		<div className="components_grid_inner_widget" onDoubleClick={()=>{console.log('should go fullscreen');window.set_fullscreen(el.fullscreen_content)}}> {el.content} </div>
		<span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>

      </div>
    );
  },

  onAddItem(x,y) {
  
	console.log("on add item called: ",y);
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
		is_fullscreen: false,
		content: y=== true? x.get_react_component() : "default text",
		fullscreen_content: y=== true? x.get_fullscreen_react_component():null
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({layout: layout});
  },

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render() {
	console.log("widgets in grid is: ",this.props.widgets);
    return (
      <div>
	  {/*<button onClick={this.onAddItem}>Add Item</button>*/}
        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
            {...this.props}>
          {_.map(this.state.items, this.createElement)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = AddRemoveLayout;