import React from 'react';

import {Route , Switch} from "react-router-dom";
import CollectionPage from "../../stripeCheckout/collectionPage/collection.component";
import CollectionOverview from "../../stripeCheckout/collection-overview/collection-overview.component";


const ShopPage =({match}) =>(
   <div className="shop-page">
    <Switch>
     <Route  exact path={`${match.path}`}   component={CollectionOverview}/>
     <Route        path={`${match.path}/:collectionId`}   component={CollectionPage}/>
    </Switch>
    
   
     
   </div>
)


export default ShopPage;


