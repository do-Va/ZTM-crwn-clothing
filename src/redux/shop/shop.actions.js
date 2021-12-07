import ShopActionTypes from './shop.types';

export const changeShopParams = item => ({
  type: ShopActionTypes.CHANGE_PARAMS,
  payload: item,
});

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
