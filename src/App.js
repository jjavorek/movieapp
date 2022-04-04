import "./App.css";
import { useEffect } from "react";

// fc546608

const API_URL = "http://www.omdbapi.com?apikey=fc546608";

const App = () => {
  const name = "Justin";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>Hello, {name}</h1>
    </div>
  );
};

export default App;
