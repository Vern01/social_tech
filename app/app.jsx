var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <div>
  <form action="/register" method="post">
    <input type="text" name="login" placeholder="login"/>
    <br/>
    <input type="password" name="passwd" placeholder="passwd"/>
    <br/>
    <input type="submit" value="Submit"/>
  </form>
  </div>,
  document.getElementById('app')
);
