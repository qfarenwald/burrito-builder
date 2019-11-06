import { orders } from './orders';

describe('orders', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = orders(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set orders to state', () => {
    const initialState = [];
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
    const state = initialState;
    const action = {
      type: 'SET_ORDERS',
      orders: mockOrders
    };

    const newState = mockOrders;

    const result = orders(state, action);

    expect(result).toEqual(newState);
  });

  it('should add an order to state', () => {
    const initialState = [];
    const mockOrder = {
            "id": 1,
            "name": "Pat",
            "ingredients": [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
            ]
        }
    const state = initialState;
    const action = {
      type: 'ADD_ORDER',
      order: mockOrder
    };

    const newState = [...initialState, mockOrder];

    const result = orders(state, action);

    expect(result).toEqual(newState);

  });

});
