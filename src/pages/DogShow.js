import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'

export class DogShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleted: false
    }
  }
  handleDelete = () => {
    this.props.deleteDog(this.props.dog.id)
    this.setState({ deleted: true })
  }



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
            >
              Update Info
            </Button>
          </NavLink>
          <Button onClick={this.handleDelete}
            color='dark'
          >
            Delete Dog
          </Button>

        </div>
        {
          this.state.deleted && <Redirect to='/dogindex' />
        }
      </>
    )
  }
}

export default DogShow
