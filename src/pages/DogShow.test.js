import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import DogShow from './DogShow.js'

import mockDogs from '../mockDogs'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogShow Renders", () => {
  let dogShow
  beforeEach(() => {
    dogShow = shallow(<DogShow dog={mockDogs[0]} />)
  })
  it("displays a heading", () => {
    const heading = dogShow.find('h1')
    expect(heading.text()).toEqual('Meet Me')
  })

})
