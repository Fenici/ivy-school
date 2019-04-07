import React, { Component } from "react";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Result</h2>

        <p>teacher are able to read and update the student's result</p>
        <p>student is only able to see their own result state</p>
      </div>
    );
  }
}

export default Result;
