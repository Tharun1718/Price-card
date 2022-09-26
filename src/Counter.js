import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton aria-label="delete" color="primary">
      <Badge badgeContent={like} color="primary" onClick={() => { setLike(like + 1); }}>
        👍
      </Badge>
      </IconButton>
      <IconButton aria-label="delete" color="error">
      <Badge badgeContent={disLike} color="error" onClick={() => { setDisLike(disLike + 1); }}>
        👎
      </Badge>
      </IconButton>

    </div>
  );
}
