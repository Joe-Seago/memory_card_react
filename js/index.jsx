var React = require('react');
var ReactDOM = require('react-dom');

var arrayCards = ['ac.gif', '2h.gif', '5c.gif', '7s.gif'];

var Board = React.createClass({
  render: function() {
    return(
      <div>
        <CardContainer />   
      </div>
    );
  }
});

var Card = React.createClass({
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

var CardContainer = React.createClass({
	getInitialState: function() {
		return {
			Cards: [{img: 'ac.gif', faceUp: false}, {img: '2h.gif', faceUp: false}, {img: '5c.gif', faceUp: false}, {img: '7s.gif', faceUp: false}]
		}
	},
	render: function() {
		return (
			<div>
				{this.state.Cards.map(function(element, index) {
					return <Card key={index} img={element.img} faceUp={element.faceUp} />;
				})}
			</div>
		);
	}
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board  />, document.getElementById('app'));
});