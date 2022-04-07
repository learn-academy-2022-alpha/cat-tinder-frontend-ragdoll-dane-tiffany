import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import DogNew from './DogNew.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogNew Renders", () => {
  let dogNew
  beforeEach(() => {
    dogNew = shallow(<DogNew />)
  })
  it("displays a heading", () => {
    const heading = dogNew.find('h1')
    expect(heading.text()).toEqual('Create A New Dog')
  })
  it("displays a dog form", () => {
    const form = dogNew.find('DogForm')
    expect(form.length).toEqual(1)
  })

})
