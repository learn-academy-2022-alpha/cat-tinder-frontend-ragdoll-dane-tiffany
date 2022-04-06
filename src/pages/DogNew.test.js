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
  it("displays a form", () => {
    const form = dogNew.find('Form')
    expect(form.length).toEqual(1)
  })
  it("displays an input for age", () => {
    const ageInput = dogNew.find('[name="age"]')
    expect(ageInput.length).toEqual(1)
  })
  it("displays an input for enjoys", () => {
    const enjoysInput = dogNew.find('[name="enjoys"]')
    expect(enjoysInput.length).toEqual(1)
  })
  it("displays an input for image", () => {
    const imageInput = dogNew.find('[name="image"]')
    expect(imageInput.length).toEqual(1)
  })
})
