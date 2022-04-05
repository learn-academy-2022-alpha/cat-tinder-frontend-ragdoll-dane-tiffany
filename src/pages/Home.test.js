import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Home from './Home.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Home Renders", () => {
  let home
  beforeEach(() => {
    home = shallow(<Home />)
  })
  it("displays a heading", () => {
    const heading = home.find('h1')
    expect(heading.text()).toEqual('Welcome to the park buds.')
  })
})
