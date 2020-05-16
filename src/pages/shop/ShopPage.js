import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/CollectionComponent';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionStartAsync } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop-selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {

    componentDidMount(){
      const { fetchCollectionStartAsync } = this.props;
      fetchCollectionStartAsync();
    }
    render(){
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) =>                     <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner 
                    isLoading={!isCollectionLoaded}

                    {...props}/>}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch =>({
   fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);