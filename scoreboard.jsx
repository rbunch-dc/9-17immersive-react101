// This app works (except for the buttons), but it's huge. 
// I would much rather just paste this in to the HTML.
// Let's break it up into peices, ie. components!
// Application
//  -- Header
//  -- Team
//    -- Counter
//  -- Team
//    -- Counter

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>		
	)	
}

function Team(props){
	console.log(props);
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="minus">-</button>
				<div className="team-score">{props.score}</div>
				<button className="plus">+</button>
			</div>
		</div>
	)
}

// function div(props){
// 	return(
// 		<h1>THIS IS A TEST</h1>
// 	)
// }

function Application(props){
	// props.callBack();
	// console.log("This is the application component")
	// var studnets = [1,2,3,4,5,6,6];
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				<Team name="Columbus" score="0" />
				<Team name="Toronto" nation="Canada" score="0" />
			</div>

		</div>
	);
};


// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What.
// 2. Where.

var title = 'MLS Semi-Final Scoreboard';
var callBack = function(){
	console.log("I was passed as props!");
}

ReactDOM.render(
	// Pass our title as an attribute. It will come through to the component, as props.xxx
	<Application title={title} callBack={callBack} />,
	document.getElementById('root')
)


function printScreen(a){
	console.log(a);
}

printScreen("Hello");
printScreen("Goodbye");



function sum(x,y){
	return x+y;
}

console.log(sum(2,3))
