import './App.css';
import { MovieList} from './MovieList';
import { useState } from 'react';
import { AddMovie } from './AddMovie';
import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
import { Counter } from './Counter';
import { PriceCard } from './PriceCard';

function App() {

  const [moviesList, setMoviesList] = useState(INITIAL_MOVIE_LIST);

  //price card detials are stored in an object
  const cardDetails = [{
    type: "FREE",
    price: "$0",
    usertype: "✔ Single User",
    storage: "✔ 5GB storage",
    projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private: "✖ Unlimited Private Projects",
    support: "✖ Dedicated Phone Support",
    domain: "✖ Free Subdomain",
    reports: "✖ Monthly Status Reports",
  },
  {
    type: "PLUS",
    price: "$9",
    usertype: "✔ 5 Users",
    storage: "✔ 50GB storage",
    projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private: "✔ Unlimited Private Projects",
    support: "✔ Dedicated Phone Support",
    domain: "✔ Free Subdomain",
    reports: "✖ Monthly Status Reports",
  },
  {
    type: "PRO",
    price: "$49",
    usertype: "✔ Unlimited Users",
    storage: "✔ 150GB storage",
    projects: "✔ Unlimited Public Projects",
    access: "✔ Community Access",
    private: "✔ Unlimited Private Projects",
    support: "✔ Dedicated Phone Support",
    domain: "✔ Free Subdomain",
    reports: "✔ Monthly Status Reports",
  }
]

  return (
    <div className="App">
      {/* <AddMovie setMoviesList={setMoviesList} moviesList={moviesList} />
      <MovieList movies={moviesList} /> */}
      {/* <ColorGame /> */}
      {/* <Counter /> */}
      <div className="pricecard-container">
      {cardDetails.map((details)=>(
        <PriceCard details = {details} />
      
      ))}
      </div>
    </div>
  )
}

export default App;
