const pug = require('pug');

const grid = require('./grid')
const mainToolbar = require('./toolbar')
const dashboard = require('./tabs')
const preferences = require('./preferences')

const tabsTemplate = pug.compileFile('src/templates/tabs.pug');
const preferencesTemplate = pug.compileFile('src/templates/preferences.pug');
var mainLayoutStyle = 'border:1px solid grey';
const config = {
	name: 'layout-home',
	padding: 1,
	panels: [
		{ type: 'left', size: 300, minSize:250, style:mainLayoutStyle, resizable: true},
		{ type: 'main', content: tabsTemplate(), style:mainLayoutStyle},
		{ type: 'right', size: 350, minSize:350, style:mainLayoutStyle, resizable: true, content:preferencesTemplate()},
		{ type: 'bottom', size: 35, resizable: false, style:mainLayoutStyle, toolbar: mainToolbar}
	]
};

//init app layout
$('#layout-home').w2layout(config);

// init left panel content
w2ui['layout-home'].content('left', grid);

// init main panel content
dashboard.init();

// init right panel content
preferences.init();

// With ES5
var JiraApi = require('jira-client');

// Initialize
var jira = new JiraApi({
	protocol: 'https',
	host: 'pipingrock.atlassian.net',
	username: 'kgaurav@pipingrock.com',
	password: '',
	apiVersion: '2'
});
jira.findIssue("ECI-38")
	.then(function(issue) {
		w2ui['layoutdashboard'].content('main', '<div><p>Jira Issue Number: '+issue.key+'</p><p>Jira Issue Summary: '+issue.fields.summary+'</p><p>Jira Issue Status: '+issue.fields.status.name+'</p></div>');
		console.log(issue);
	})
	.catch(function(err) {
		console.error(err);
	});
