import React from "react"

// receive props and de-structing props
const Card = ({ name, email, id }) => {
  // de-structuring, replace props.name => name
  // const { name, email, id } = props
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
