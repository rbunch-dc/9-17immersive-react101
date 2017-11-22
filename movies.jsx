
function Poster(props){
	return(
		<div className="col-sm-12 col-md-4 col-lg-3">
			<img src={props.image} />
		</div>
	)
}


// class Poster extends React.Component{
// 	// if we are going to extend something we need to...
// 	constructor(){
// 		super();
// 	}
// 	render(){
// 	return(
// 		<div className="col-sm-12 col-md-4 col-lg-3">
// 			<img src={props.poster} />
// 		</div>
// 	)
// 	}

// }

class Movies extends React.Component{
	// if we are going to extend something we need to...
	constructor(){
		super();
		this.state = {
			moviesToShow: []
		}
	}

	// componentDidMount is special. We can make our own methods,
	// but this one is used by React.Component.
	componentDidMount(){
		// console.log("Movies was just put into the DOM");
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5";
		$.getJSON(url, (movieData)=>{
			// console.log(movieData);
			var nowPlayingArray = [];
			movieData.results.map((movie)=>{
				nowPlayingArray.push(movie);
			});
			this.setState({
				moviesToShow: nowPlayingArray
			})
		});
	}

	// We MUST have this method...
	render(){
		const imagePath = "http://image.tmdb.org/t/p/w300";
		var moviesList = [];
		console.log(this.state.moviesToShow);
		this.state.moviesToShow.map((movie, index)=>{
			var fullImagePath = imagePath + movie.poster_path;
			moviesList.push(<Poster key={index} image={fullImagePath} />)
		});	

		// console.log(moviesList);
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="th-wrapper">
							<button className="btn btn-primary">Reset Search</button>
						</div>
						<div className="movie-rows">
							{/* Movies go here! */}
							{moviesList};
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// 1. What.
// 2. Where
ReactDOM.render(
	<Movies />,
	document.getElementById('root')
)