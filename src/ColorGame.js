import { useState } from 'react';
import { ColorList } from './ColorList';

export function ColorGame() {
  const [color, setColor] = useState("violet");
  const styles = {
    background: color
  };
  const [colorList, setColorList] = useState(["red", "green", "blue",]);
  return (
    <div>
      <input
        value={color}
        style={styles}
        type="text"
        placeholder='enter a color name'
        onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr, index) => (
        <ColorList key={index} color={clr} />
      ))}
    </div>
  );
}
