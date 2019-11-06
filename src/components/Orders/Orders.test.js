import React from 'react';
import { Orders } from './Orders';
import { shallow } from 'enzyme';

describe('Orders', () => {
  it('should match the snapshot', () => {
    const mockOrders = [
      {
            "id": 1,
            "name": "Pat",
            "ingredients": [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]
        },
        {
            "id": 2,
            "name": "Sam",
            "ingredients": [
                "steak",
                "pico de gallo",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]
        },
    ]
    const wrapper = shallow(<Orders orders={mockOrders}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
