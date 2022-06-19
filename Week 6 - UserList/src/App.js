
import React, { Component } from "react";
import axios from "axios";


export default class App extends Component {
  state = {
    people: [],
    loading: false,

  }

  componentDidMount() {
    const url=  "https://jsonplaceholder.typicode.com/users";
    axios.get(`${url}`)
      .then(res => {
        const people = res.data;
        this.setState({
          people: people,
          loading: true
        });
      })
  }

  render() {
    return (
      <div>{
        (this.state.loading === true) ? <ul>
          {
            this.state.people
              .map(person =>
                <li key={person.id}>{person.username}:{person.name}</li>
              )
          }
        </ul> : <p>Loading...</p>
      }
      </div>
    );
    /*     if (this.state.loading === true) {
          return (
            <ul>
              {
                this.state.people
                  .map(person =>
                    <li key={person.id}>{person.username}:{person.name}</li>
                  )
              }
            </ul>
          )
        }
        else {
          return (
            <p>Loading...</p>
          )
        } */
  }
}
