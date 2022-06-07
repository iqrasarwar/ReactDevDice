import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function StateComponent(prop) {
  const [name, setName] = React.useState({ name: prop.name });
  function update() {
    setName(prevStte =>  {return  { ...prevStte, name: "new Name" };
});
  }
  return (
    <div>
      <p>Your name here! {name.name}</p>
      <button OnClick={() => update()}>Click To change Name</button>
    </div>
  );
}
ReactDOM.render(
  <StateComponent name="prevname" />,
  document.getElementById("root")
);
