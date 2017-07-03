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

  it('should render cat component(s)', () => {
    const wrapper = shallow(<CatsList {...props}/>);

    expect(wrapper.find(Cat)).not.toHaveLength(0);
  });

  it('should render same number of cat components as props.cats', () => {
    const wrapper = shallow(<CatsList {...props}/>);
    const cats = [{name: 'Snuggles', picture: 'https://picsofsnugglez.com/1'}, {name: 'Bob', picture: 'https://picsofsnugglez.com/2'}];

    expect(wrapper.find(Cat)).toHaveLength(cats.length);
  });
});