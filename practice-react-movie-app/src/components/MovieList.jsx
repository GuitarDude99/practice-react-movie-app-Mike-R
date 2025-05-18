function MovieList(props) {

    const movieArray = props.movies;
  
   
    if (movieArray.length === 0) {
      return null;
    }
  
    const movieItems = movieArray.map(function(movieTitle, index) {
      return <li key={index}>{movieTitle}</li>;
    });
  
    //Add Return 

    return (
      <div>
        <h2>Movie Results</h2>
        <ul>{movieItems}</ul>
      </div>
    ) ;


  }
  
  export default MovieList;
  