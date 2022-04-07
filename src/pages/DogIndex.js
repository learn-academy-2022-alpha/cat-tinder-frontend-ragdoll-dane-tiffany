import React, { Component } from 'react'
import CardContainer from '../components/CardContainer'

export class DogIndex extends Component {
  render() {
    return (
      <div>
        <h1>Meet the Buddies!</h1>
        <div className='cards-container'>
          {
            this.props.dogs && this.props.dogs.map(dog => (
              <CardContainer key={dog.id} dog={dog} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default DogIndex
