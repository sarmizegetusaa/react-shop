import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/CollectionItem';
import { selectCollection } from '../../redux/shop/shop-selectors';

import './CollectionComponent.styles.scss';

const CollectionPage = ({ collection }) =>{

  const { title, items } = collection;
  return (
  <div className='collection-page'>
    <h2 className='title'></h2>
    <div className='items'>
      {
        items.map(item => <CollectionItem key={items.id} item={item}/>)
      }
    </div>
  </div>
  )}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);