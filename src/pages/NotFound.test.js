import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import NotFound from './NotFound.js'
import notFoundPic from '../assets/not-found-dog.png'

Enzyme.configure({ adapter: new Adapter() })

describe("When NotFound Renders", () => {
  let notFound
  beforeEach(() => {
    notFound = shallow(<NotFound />)
  })

  it("displays a heading", () => {
    const heading = notFound.find('h1')
    expect(heading.text()).toEqual("404! Can't find your buddy here.")
  })
  it("checks all image's props", () => {
    const img = notFound.find('img')
    expect(img.prop('src')).toEqual(notFoundPic)
    expect(img.prop('alt')).toEqual('dog')
    expect(img.prop('id')).toEqual('not-found-img')
  })
})
