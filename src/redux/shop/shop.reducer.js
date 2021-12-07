import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  params: 'hats',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.CHANGE_PARAMS:
      return {
        ...state,
        params: action.payload,
      };

    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
