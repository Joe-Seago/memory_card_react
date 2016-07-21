var React = require('react');
var ReactDOM = require('react-dom');

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
    this.props.flipCard(this.props.id);
  },
  render: function() {
    if(this.props.faceUp) {
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
			cards: [{img: 'ac.gif', faceUp: false}, {img: '2h.gif', faceUp: false}, {img: '5c.gif', faceUp: false}, {img: '7s.gif', faceUp: false}]
		}
	},
  flipCard: function(index) {
    var temp = this.state.cards.slice();
    temp[index].faceUp = !temp[index].faceUp;

    this.setState({
      cards: temp
    });
  },
	render: function() {
    // Using a local variable so I can access this.flipCard inside the map method.
    var flipCard = this.flipCard;
		return (
			<div>
				{this.state.cards.map(function(element, index) {
					return <Card key={index} 
            img={element.img} 
            flipCard={flipCard}
            key={index} 
            id={index} 
            faceUp={element.faceUp} />;
				}) }
			</div>
		);
	}
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board  />, document.getElementById('app'));
});