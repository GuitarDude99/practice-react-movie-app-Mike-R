import React, { useState } from "react";
import GenreDropdown from "./Dropdown.jsx";



function MovieSelector() {
  
    const [selectedGenre, setSelectedGenre] = useState("");

    const [isLoading, setIsLoading] = useState(false);
  
    const [errorMessage, setErrorMessage] = useState("");
  
    const [movieList, setMovieList] = useState([]) ;


  
    
    function handleGenreChange(event) {

        const chosenGenre = event.target.value;
        setSelectedGenre(chosenGenre);


      }
    
      
        function fetchMovies() {
          
            if (selectedGenre === "") {
              setErrorMessage("Please select a genre before fetching movies.");
              setMovieList([]);
              return;
            }
          
            setErrorMessage("");

            setIsLoading(true);
          
           
            const moviesByGenre = {
              Superhero: ["Superman (1977)", "Batman (1989)", "Captain America: Civil War"],
              Drama: ["Million Dollar Baby", "Pearl Harbor", "Casablanca"],
              Comedy: ["Anchorman", "Bedazzled", "Caddyshack"],
            };
          
            // 4. Simulate delay (that was tricky)
            setTimeout(() => {
              
              const movieArray = moviesByGenre[selectedGenre];
          
              
              setMovieList(movieArray);
              setIsLoading(false);
            }, 1000);

          }
          
    
 return (

    <div className="movie-selector">
      <h1> React Movie App</h1>
  
      <GenreDropdown 
        selectedGenre={selectedGenre} 
        onChange={handleGenreChange} 

        />
  
      <br />
  
      <button onClick={fetchMovies}>Fetch Movies</button>
  
      {isLoading && <p>Loading movies..</p>}
  
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
  
      <ul>

        {movieList.map((movie, index) => (

          <li key={index}>{movie}</li>

        )
       
    )
        
        }
      </ul>

    </div>
  );
  

}

export default MovieSelector;
