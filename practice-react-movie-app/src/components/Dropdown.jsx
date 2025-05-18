function GenreDropdown({ selectedGenre, onChange }) {

  return (
    <>

      <label htmlFor="genre">Select a Genre:</label>

      <select id="genre" value={selectedGenre} onChange={onChange}>

        <option value="">-- Choose a Genre --</option>

        <option value="Superhero">Superhero</option>

        <option value="Drama">Drama</option>

        <option value="Comedy">Comedy</option>

      </select>
      <br /><br />
    </>
  );
  
}

export default GenreDropdown;
