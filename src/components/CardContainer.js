import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardImg } from 'reactstrap'
import { FaDog } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export class CardContainer extends Component {
  render() {
    const { name, image, id } = this.props.dog
    return (
      <Card border='dark'>
        <CardHeader bg='Dark'>
          {name}
        </CardHeader>
        <NavLink to={`/dogshow/${id}`}>
          <CardImg
            src={image}
            alt={`${name} the dog`}
          />
          <CardFooter>
            <div className='text-wrapper'>
              <span>View Profile</span>
              <FaDog className='icon' />
            </div>
          </CardFooter>
        </NavLink>
      </Card>
    )
  }
}

export default CardContainer
