import React, { Component } from "react";

export default class Newsfeed extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      headlines: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Headlines for {this.state.date.toLocaleDateString()}</h1>
      </div>
    );
  }
}
