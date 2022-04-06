import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class DogIndex extends Component {
  render() {
    return (
      <div>
        <h2>Meet the Buddies!</h2>
        {this.props.dogs && this.props.dogs.map(dog => {
          return (
            <NavLink to={`/dogshow/${dog.id}`} key={dog.id}> {dog.name}</NavLink>
          )
        })}
      </div>
    )
  }
}

export default DogIndex