import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Header from './Header.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Header Renders", () => {
  let header
  beforeEach(() => {
    header = shallow(<Header />)
  })
  it("displays a heading", () => {
    const heading = header.find('.app-title')
    expect(heading.text()).toEqual('barkbuds 🐾')
  })
})
