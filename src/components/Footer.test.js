import React from 'react'

import Enzyme, { shallow } from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import Footer from './Footer.js'

Enzyme.configure({ adapter: new Adapter() })

describe("When Footer Renders", () => {
  let footer
  beforeEach(() => {
    footer = shallow(<Footer />)
  })
  it("displays a heading", () => {
    const heading = footer.find('#copyright')
    expect(heading.text()).toEqual('© Dane Roelofs and Tiffany Do')
  })
})
