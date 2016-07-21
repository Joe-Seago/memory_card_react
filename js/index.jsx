var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
  render: function() {
    return (
        <div>{this.props.name}</div>
      );
  }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Card name="I'm a card!" />, document.getElementById('app'));
});