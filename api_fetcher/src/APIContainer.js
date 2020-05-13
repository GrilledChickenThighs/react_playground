import React, { Component } from "react";
import axios from "axios";

export class APIContainer extends Component {
  state = {
    persons: [],
    ipAddress: 0,
  };

  handleClick() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      console.log(res);
      const persons = res.data;
      this.setState({ persons });
    });
    console.log("this is:", this);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
        <button onClick={() => this.handleClick()}> Click me</button>
      </div>
    );
  }
}

export default APIContainer;
