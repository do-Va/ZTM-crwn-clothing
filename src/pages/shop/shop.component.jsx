import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const ColletionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionref = firestore.collection('collections');

    collectionref.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Routes>
          <Route
            path="/"
            element={
              <ColletionsOverviewWithSpinner
                isLoading={loading}
                {...this.props}
              />
            }
          />
          <Route
            path=":collectionId"
            element={
              <CollectionPageWithSpinner isLoading={loading} {...this.props} />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
