// Add a props parameter to the component so we can send it stuff
function Application(props){
	return(
		<div className="scoreboard">
			<div className="header">
				{/*to fetch the title, swtich to js, and get props.title*/}
				<h1>{props.title}</h1>
			</div>
			<div className="teams">
				<div className="team">
					<div className="team-name">Columbus</div>
					<div className="counter">
						<button className="minus">-</button>
						<div className="team-score">0</div>
						<button className="plus">+</button>
					</div>
				</div>
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
