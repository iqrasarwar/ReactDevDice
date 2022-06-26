import React from "react";

const styles = {
  border: "2px solid Red",
  background: "lightgreen",
  width: "100px",
  height: "100px",
  textAlign: "center",
  fontSize: "60px",
  lineHeight: "100px",
  cursor: "pointer",
};
const Sqaure = ({ value, onClick }) => {
  return (
    <>
      <div style={styles} onClick={onClick}>
        {value}
      </div>
    </>
  );
};

export default Sqaure;
