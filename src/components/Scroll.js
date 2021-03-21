import React from "react"

const Scroll = (props) => {
  console.log(props)
  // style={} = JSX
  // rap in {} object
  return <div style={{ overflowY: "scroll", border: "1px solid black", height: "500px" }}>{props.children}</div>
}

export default Scroll
