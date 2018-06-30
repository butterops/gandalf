
const grid = require('./grid')
const mainToolbar = require('./toolbar')
const serviceTabs = require('./tabs')
const serviceList = require('./services.json')

$(function () {
	var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
	$('#layout-home').w2layout({
		name: 'layout-home',
		padding: 1,
		panels: [
			{ type: 'left', size: 300, minSize:250,resizable: true, style: pstyle, content: 'left' },
			{ type: 'main', style: pstyle, content: 'main'},
			{ type: 'right', size: 200, resizable: true, style: pstyle, content: 'right' },
			{ type: 'bottom', size: 40, resizable: true, style: pstyle, content: 'bottom' }
		]
	});

	w2ui['layout-home'].content('left', grid.init());

	w2ui['grid'].add(serviceList);

	w2ui['layout-home'].assignToolbar('main', mainToolbar.init())

	w2ui['layout-home'].content('main', '<div id="tabs" style="width: 100%;"></div><div data-tabs-content></div>');

	serviceTabs.init();
});
