var React = require('react');
var ReactDOM = require('react-dom');

var arrayCards = ['ac.gif', '2h.gif', '5c.gif', '7s.gif'];

var Board = React.createClass({
  render: function() {
    var itemsToRender = [];
    this.props.cards.forEach(function(element, index) {
      itemsToRender.push(<Card img={element} key={index} id={index} />);
    });

    return(
      <div>
        {itemsToRender}       
      </div>
    );
  }
});

var Card = React.createClass({
  getInitialState: function() {
    return {
      faceUp: false,
    };
  },
  onChange: function() {
    this.setState({
      faceUp: !this.state.faceUp
    });
  },
  render: function() {
    if(this.state.faceUp) {
      return (
        <div>
          <label htmlFor={this.props.id}>
            <img src={'../cards/' + this.props.img} />
          </label>
          <input onChange={this.onChange} type="checkbox" id={this.props.id} /> 
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor={this.props.id}>
            <img src='../cards/b.gif' />
          </label>
          <input onChange={this.onChange} type="checkbox" id={this.props.id} /> 
        </div>
      );
    }

  }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board cards={arrayCards} />, document.getElementById('app'));
});