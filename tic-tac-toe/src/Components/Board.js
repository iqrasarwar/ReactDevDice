import Sqaure from "./Sqaure";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};
const styles1 = {
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
};
const styleh = {
  color: "red",
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "20px",
  fontFamily: "Verdana",
};
export default function Board({ sqaures, onClick }) {
  return (
    <div style={styles}>
      <div style={styleh}>Tic Tac Toe</div>
      {
        //map through the squares array and return a square component for each square
        sqaures.map((square, i) => (
          <Sqaure key={i} value={square} onClick={() => onClick(i)} />
        )) 
      }
    </div>
  );
}
