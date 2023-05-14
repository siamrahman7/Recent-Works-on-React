import React, { Component } from "react";

export default class EventHandeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: " ",
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        // console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.changeValue}</p>
      </div>
    );
  }
}
const people = [
  { name: "John", age: 15 },
  { name: "Mike", age: 35 },
  { name: "Jack", age: 45 },
];

console.table(people);
