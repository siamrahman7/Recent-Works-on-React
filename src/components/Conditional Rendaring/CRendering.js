import React, { Component } from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
export default class CRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>;
  }
}
