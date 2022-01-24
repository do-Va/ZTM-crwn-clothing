import React, { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SuspenseComponent from '../../components/suspense/suspense.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          path="/"
          element={SuspenseComponent(CollectionsOverviewContainer)}
        />
        <Route
          path=":collectionId"
          element={SuspenseComponent(CollectionPageContainer)}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
