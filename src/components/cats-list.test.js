//Make sure if give it array, get right amount of cat components
//Write any other tests you think cats-list should have

import React from 'react';
import { shallow } from 'enzyme';
import Cat from './cat';
import CatsList from './cats-list';


describe('cat component tests', () => {
  const props = {
    name: 'Snuggles',
    picture: 'https://picsofsnugglez.com/1', 
    cats: [{name: 'Snuggles', picture: 'https://picsofsnugglez.com/1'}, {name: 'Bob', picture: 'https://picsofsnugglez.com/2'}]
  };

  /*it('should render cat\'s name', () => {
    const wrapper = shallow(<Cat {...props}/>);
    const name = 'Snuggles';
    
    expect(wrapper.contains(name)).toEqual(true);
  });*/

  it('should render correct number of cat components', () => {
    const wrapper = shallow(<CatsList {...props}/>);
    const cats = [{name: 'Snuggles', picture: 'https://picsofsnugglez.com/1'}, {name: 'Bob', picture: 'https://picsofsnugglez.com/2'}];
    
    expect(wrapper.find(Cat)).toHaveLength(props.cats.length);
  });
});