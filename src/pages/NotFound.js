import React, { Component } from 'react'
import notFoundPic from '../assets/not-found-dog.png'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <h1 className='large-font half-width'>404! Can't find your buddy here.</h1>
        <img id='not-found-img' src={notFoundPic} alt='dog' />
      </div>
    )
  }
}

export default NotFound
