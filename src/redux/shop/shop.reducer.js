import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: SHOP_DATA,
  params: 'hats',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  console.log(state.params);
  switch (action.type) {
    case ShopActionTypes.CHANGE_PARAMS:
      return {
        ...state,
        params: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
