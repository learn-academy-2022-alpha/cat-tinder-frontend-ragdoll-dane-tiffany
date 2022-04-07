import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

export class DogShow extends Component {
  render() {
    let { dog } = this.props
    return (
      <>
        <h1>Meet Me</h1>
        <div className='profile-content'>
          <img
            src={dog.image}
            alt={`${dog.name} the dog`}
            className='center profile-img'
          />
          <h2 className='center text-margin'>Hi, my name is {dog.name}!</h2>
          <h3 className='center text-margin'>
            {dog.name} is {dog.age} {dog.age > 1 ? 'years' : 'year'} old and enjoys {dog.enjoys.toLowerCase()}.
          </h3>
          <NavLink
            className='update-btn'
            to={`/dogedit/${dog.id}`}
          >
            <Button
              color='dark'
              className='update-btn'
            >
              Update Info
            </Button>
          </NavLink>
        </div>
      </>
    )
  }
}

export default DogShow
