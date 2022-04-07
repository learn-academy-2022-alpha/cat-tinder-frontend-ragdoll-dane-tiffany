import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import DogIndex from './DogIndex.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogIndex Renders", () => {
  let dogIndex
  beforeEach(() => {
    dogIndex = shallow(<DogIndex />)
  })
  it("displays a heading", () => {
    const heading = dogIndex.find('h1')
    expect(heading.text()).toEqual('Meet the Buddies!')
  })
})
