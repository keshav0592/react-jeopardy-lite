import React from "react";

function Welcome(props) {
  let name = (props.match && props.match.params.name) || props.name;
  return <div className="welcome">Welcome {name}!</div>;
}
export default Welcome;
