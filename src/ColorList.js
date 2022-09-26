export function ColorList({ color }) {

  const styles = {
    width: "200px",
    height: "25px",
    background: color,
    marginTop: "10px",
  };

  return (
    <div style={styles}></div>
  );
}
