import React from "react";

export default function EventBubble() {
  const handleChildClick = (event) => {
    event.stopPropagation();
    console.log("child clicked", event);
  };
  const handleParentClick = (event) => {
    console.log("parent clicked", event);
  };

  return (
    <div className="parent" onClick={handleParentClick}>
      <h1>Hello World</h1>
      <button onClick={handleChildClick}>Click Here</button>
    </div>
  );
}
