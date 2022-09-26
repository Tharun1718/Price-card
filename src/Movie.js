import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({ movie }) {

  // const movie= {
  //   name: "Vendhu Thanindhathu Kaadu",
  //   poster: "https://www.behindwoods.com/uploads/623f3737dcb13.jpeg",
  //   rating: 8.1,
  //   summary: "Muthu, a low caste youngster, goes to the streets of Mumbai for a living. His quest takes him to a series of unexpected events, where he gets involved in the underground activities of Mumbai's Tamil gangsters. Will he get to the top?",
  // }
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red"
  };
  const [show, setShow] = useState(true);
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{movie.name}
        <IconButton 
          aria-label="delete" 
          color="primary"
          onClick={() => setShow(!show)}
        >
        { show ? <ExpandLessIcon /> :<ExpandMoreIcon />}
        </IconButton> 
        </h3>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
