import React from 'react';
import { OrderForm } from './OrderForm';
import { shallow } from 'enzyme';

describe('OrderForm', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<OrderForm />);

    expect(wrapper).toMatchSnapshot();
  });
});
