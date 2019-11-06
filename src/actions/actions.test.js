import * as actions from '../actions';

describe('actions', () => {

    it('should have a type of SET_ORDERS', () => {
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
      const expectedAction = {
        type: 'SET_ORDERS',
        orders: mockOrders
      }

      const result = actions.setOrders(mockOrders);

      expect(result).toEqual(expectedAction);
    });

    it('should have a type of ADD_ORDER', () => {
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

      const expectedAction = {
        type: 'ADD_ORDER',
        order: mockOrder
      }

      const result = actions.addOrder(mockOrder);

      expect(result).toEqual(expectedAction);
    });

});
