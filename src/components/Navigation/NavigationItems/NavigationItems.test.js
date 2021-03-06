import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { NavLink } from 'react-router-dom';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


configure({adapter: new Adapter()})

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavigationItems />)
  })

  it('Have 4 <NavigationItems />', () => {
    expect(wrapper.find(NavigationItem).length).toBe(4)
  })
})