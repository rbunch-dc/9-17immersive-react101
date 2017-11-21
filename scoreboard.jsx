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
	return(
		<div className="team">
			<div className="team-name">Columbus</div>
			<div className="counter">
				<button className="minus">-</button>
				<div className="team-score">0</div>
				<button className="plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				
				<div className="team">
					<div className="team-name">Toronto</div>
					<div className="counter">
						<button className="minus">-</button>
						<div className="team-score">0</div>
						<button className="plus">+</button>
					</div>
				</div>
			</div>

		</div>
	);
};


// ReactDOM.render puts a component into the DOM.
// It takes 2 args:
// 1. What.
// 2. Where.
ReactDOM.render(
	// Pass our title as an attribute. It will come through to the component, as props.xxx
	<Application title="MLS Semi-Final Scoreboard"/>,
	document.getElementById('root')
)

