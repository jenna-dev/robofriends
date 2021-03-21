import React from "react"
import Card from "./Card"

const CardList = ({ robots }) => {
  return (
    <div>
      {
        // .map(name, index)
        // need to add uniqle Key, sth do not change (e.g. index)
        robots.map((user, i) => {
          return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        })
      }
    </div>
  )
}

export default CardList
