
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/Types';

const initialState = {
  items: [
    { id: '1', name: 'Eggs' },
    { id: '2', name: 'Milk' },
    { id: '3', name: 'Steak' },
    { id: '0', name: 'Candy' }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: [
          ...state.items,
        ]
      };
    default:
      return state;
  }
}