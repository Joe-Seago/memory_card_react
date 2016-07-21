var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
  render: function() {
    return (
        <div>
        	<img src={'../cards/' + this.props.img} /> 
       		<img src={'../cards/' + this.props.imgDown} />
       	</div>
      );
  }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Card img="ac.gif" imgDown="b.gif" />, document.getElementById('app'));
});