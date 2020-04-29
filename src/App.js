import React from 'react';
import axios from "axios";
// import PropTypes from 'prop-types';

// function Component
// function App() {
//   return (
//     <div>
//       <h1>Hello Movie</h1>
//       {MovieILike.map(movies => (
//         <Movie
//           key={movies.id}
//           name={movies.name}
//           image={movies.image}
//           rating={movies.rating} />
//       ))}

//     </div>

//   );
// };

// class Components
class App extends React.Component {
  state = {
    isLoading: true
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(movies)
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading } = this.state

    return <h2>{isLoading ? "Loading..." : "We are ready!"} </h2>
  }
}

export default App;
