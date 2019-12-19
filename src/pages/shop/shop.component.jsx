import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={ CollectionsOverview}/>    {/* Takes to overview of categories  */}
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> { /* Takes you to specific category */}
    </div>
);



export default ShopPage;