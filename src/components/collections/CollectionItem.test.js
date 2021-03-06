import React from 'react';
import { shallow } from 'enzyme';
import CollectionItem from './CollectionItem';

describe('CollectionItem component', () => {
  it('renders CollectionItem', () => {
    const wrapper = shallow(<CollectionItem 
      name='Title'
      description='description'
      _id='delete'
      handleDelete={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
