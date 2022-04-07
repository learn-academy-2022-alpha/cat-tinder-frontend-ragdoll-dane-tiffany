import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import DogEdit from './DogEdit.js'

import mockDogs from '../mockDogs'

Enzyme.configure({ adapter: new Adapter() })

describe("When DogEdit Renders", () => {
  let dogEdit
  beforeEach(() => {
    dogEdit = shallow(<DogEdit dog={mockDogs[0]} />)
  })
  it("displays a heading", () => {
    const heading = dogEdit.find('h1')
    expect(heading.text()).toEqual("Update Kai's Info")
  })
  it("displays a dog form", () => {
    const form = dogEdit.find('DogForm')
    expect(form.length).toEqual(1)
  })

})
