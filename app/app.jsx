var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');

var About = require('About');
var Examples = require('Examples');
//same as var Route = require('react-router').Route;

ReactDOM.render(
//react router library expects 1 prop, history
//define individual routes
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component = {Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
