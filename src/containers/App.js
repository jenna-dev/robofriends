import React, { Component } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
// import { robots } from "./robots"

import "./App.css"
import { robots } from "../robots"

// class = object
// have state = smart component -> class syntax
class App extends Component {
  constructor() {
    // constructor of component
    super()
    // state = live in parent component
    this.state = {
      // state = description of App
      robots: [],
      searchfield: "",
    }
  }

  // run when the page loaded
  // update the state
  componentDidMount() {
    // window.fetch() = make req to server
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }))
  }

  // use arrow function, this = App
  onSearchChange = (event) => {
    // = this.state.searchfield
    // updated searchfield
    this.setState({ searchfield: event.target.value })
    // this = refer to input
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    if (!robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/* can only wrap component */}
          <Scroll>
            {/* pass through props */}
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      )
    }
  }
}

export default App
