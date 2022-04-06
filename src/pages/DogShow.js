import React, { Component } from 'react'

export class DogShow extends Component {
  render() {
    let { dog } = this.props
    return (
      <>
        <div>
          <h2>Meet Me!</h2>
        </div>
        <p>My name is: {dog.name}</p>
        <p>Age: {dog.age}</p>
        <p>Enjoys: {dog.enjoys}</p>
        <img src={dog.image} width="250px" />

      </>
    )
  }
}

export default DogShow