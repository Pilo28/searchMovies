import './App.css';
import { useEffect } from 'react';
//f0973cd9

const API_URL = "http://www.omdbapi.com?apikey=f0973cd9"

const App = () => {

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(()=>{
    searchMovies("Spiderman");
  },[]);

  return (
    <div>
      <header>
        <h1>Movie Search</h1>
        <nav>
          <input placeholder='Search for Movies'/>
        </nav>
      </header>
    </div>
  );
}

export default App;
