#npm install -g browserify 
#npm install --save babelify babel-preset-react
echo build started

echo browserify component_main.js -o component_main_browser.js
browserify -t [ babelify --presets [ react ] ] component_main.js -o component_main_browser.js

echo browserify widget_main.js -o  widget_main_browser.js
browserify -t [ babelify --presets [ react ] ] widget_main.js -o widget_main_browser.js

echo browserify main.js -o  main_browser.js
browserify -t [ babelify --presets [ react ] ] main.js -o main_browser.js

echo build complete