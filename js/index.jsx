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
  onChange: function(event) {
    this.props.flipCard(this.props.id);
  },

  render: function() {
    if(this.props.faceUp) {
      return (
        <div>
          <label htmlFor={this.props.id}>
            <img src={'../cards/' + this.props.img} />
          </label>
          <input onChange={this.onChange} checked={this.props.faceUp} type="checkbox" id={this.props.id} /> 
        </div>
      );
    } else {
      return (
        <div>
          <label htmlFor={this.props.id}>
            <img src='../cards/b.gif' />
          </label>
          <input onChange={this.onChange} checked={this.props.faceUp} type="checkbox" id={this.props.id} /> 
        </div>
      );
    }

  }
});

var CardContainer = React.createClass({
	getInitialState: function() {
		return {
			cards: [{img: 'ac.gif', faceUp: false}, {img: 'ac.gif', faceUp: false}, {img: '5c.gif', faceUp: false}, {img: '7s.gif', faceUp: false}]
		}
	},
  flipCard: function(index) {
    var numFaceUp = this.state.cards.filter(function(element) {
      return element.faceUp;
    });

    // if not face up, then flip card over
    if(numFaceUp.length < 2) {
      var temp = this.state.cards.slice();
      temp[index].faceUp = true;
      this.setState({
        cards: temp
      });

      if(numFaceUp.length === 1 && (numFaceUp[0].img === temp[index].img)) {
        console.log('You Win!');
        return;
      }
    }
    
    if(numFaceUp.length === 2) {
      var temp = this.state.cards.slice();
      
      temp[this.state.cards.indexOf(numFaceUp[0])].faceUp = false;
      temp[this.state.cards.indexOf(numFaceUp[1])].faceUp = false;
      temp[index].faceUp = true;
      this.setState({
        cards: temp
      });
      console.log('reset');
    }

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