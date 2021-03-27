import React, { useState, useEffect } from "react"
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundry"
// import { robots } from "./robots"

import "./App.css"

function App() {
  // robots = state
  // setRobots = function change the robots
  // const [state, function change state] = useState(initial state)
  // array destructuring
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState("")
  const [count, setCount] = useState(0)

  // useEffect(side effect, optional list/ dependency(effect will only activate if the calues in the list change))
  // dependency = when should run useEfeffect, [] = skip the useEffect if values haven't change between rerender
  // only run when the value have changed
  // get run every time the function App gets run
  // default run every time when App render

  // only run useEffect when the component mounted/ App rendered (first load the page)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // update the robots state with new users
        setRobots(users)
      })
    console.log(count)
  }, [count]) // only run if count changes

  const onSearchChange = (event) => {
    // change the searchfield state
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
  })

  // console.log(robots, searchfield)

  if (!robots.length) {
    return <h1>Loading</h1>
  } else {
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange} />
        {/* can only wrap component */}
        <Scroll>
          {/* pass through props */}
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
