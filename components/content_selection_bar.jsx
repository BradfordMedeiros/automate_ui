

import { Toggle } from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var React = require("react");
var $ =  require("jquery");

$('head').append('<link rel="stylesheet" type="text/css" href="components/content_selection_bar.css">');


var Scrollview = require("./widget_scrollview.jsx");
var Grid = require("./grid.jsx");

var ContentSelectionBar = React.createClass({
	

	render(){
	
		return (
            <div >  
                <div className="top_bar">
                    <MuiThemeProvider>
                       <Toggle  style={{top: "30%", left: "5%"}} onToggle={()=>{
                            $(".top_bar_accent, .top_bar_middle, .content_selection_bar_toggle").toggleClass("active");
                            setTimeout(()=>{
                                $(".content_selection_bar_toggle").toggleClass("active");
                            },200);
                        }
                    }/>
            
                    </MuiThemeProvider>
                </div>
                
                <div className="top_bar_middle">
                    {this.props.content}
                </div>
                <div className="top_bar_accent"></div>
                
            </div>
        )
    }
});


module.exports = ContentSelectionBar;
