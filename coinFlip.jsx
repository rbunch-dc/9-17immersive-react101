// DUMB COMPONENT or PRESENTATIONAL OR PURE FUNCTION - 
// It doesn't care what teh rest of the applciation is doing.
// it will ALWAYS return the same X, given the same Y
// SMART or STATEFUL component - Cares what's going at an Application level.
// The same X, will return a different Y, based on the state of the applciation.

// createClass is a helper method, that allows you to create a "class" in
// es5. it takes an object, objects have properties.
// The only rule for these properties is it MUST HAVE a render function
// render ~= docuemnt.query('something').html('new stuff')

// function CoinFlip(props){
// 	return(
// 		<h1>Sanity Check</h1>
// 	)
// }


// ES5 way. You will hardly see it, but you will see it.
// It was awesome. In 2015.
// var CoinFlip = React.createClass({
// 	render: function(){
// 		return(
// 			<h1>Sanity Check</h1>
// 		);
// 	},
// });

// SOMEONE IN A GALAXY FAR FAR AWAY...
// class React.Component{
// 	setState(newState){
// 		if(newState == oldState){
// 			Im efficient. ANd not going to do anything.
// 		}else{
// 			change state.
// 			call this.render
// 		}
// 	};
// };


// This is a smart component. Dumb components (we will still make them)
// do NOT need the class syntax.
class CoinFlip extends React.Component{
	// First thing that comes in any new class...
	constructor(props){
		// this is a child class of the React.Component class.
		// We MUST call super to use it.
		super();
		// Nothing special about title. React does not care about it. At all.
		this.title = props.title;
		this.coin = [
			props.heads,
			props.tails
		];
		// State is special. React cares. A lot.
		this.state = {
			image: this.coin[0]
		};
		this.flipCoin = this.flipCoin.bind(this);
	};



	flipCoin(){
		console.log("flip Coin ran");
		// we are going to change this.state.
		// Listen.
		// Really, listen.
		// WE NEVER CHANGE STATE DIRECTLY.
		// Everytime state changes, React will call render
		// console.log(this);
		var coinSide = (Math.round(Math.random()));
		this.setState({
			// image: 'half-dollar-coin-tail.jpg'
			image: this.coin[coinSide]
		});
		// DONT EVER EVER DO THIS
		// this.state.image = 'half-dollar-coin-tail.jpg';
	}

	// The one function we MUST have in a component is...
	render(){
		// render MUST return a single DOM element
		return(
			<div className="coin-flip">
				<h1>{this.title}</h1>
				<div>
					<button onClick={this.flipCoin}>Click to Flip the Coin</button>
					<img src={this.state.image} />
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	// <h1>Sanity Check!</h1>,
	<div>
		<CoinFlip title="Flip the coin" heads="quarter-coin-head.jpg" tails="half-dollar-coin-tail.jpg" />
		<CoinFlip title="Flip the coin again!!" heads="buffalo-nickel-heads.jpg" tails="buffalo-nickel-tails.png" />
	</div>,
	document.getElementById('root')
)
