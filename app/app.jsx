var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
  <form action="/test" method="get">
    <input type="text" name="login" placeholder="login"/>
    <br/>
    <input type="password" name="passwd" placeholder="passwd"/>
    <br/>
    <input type="submit" value="Submit"/>
  </form>
  </div>,
  document.getElementById('app')
);
