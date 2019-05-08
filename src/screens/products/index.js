import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { requestProducts } from '../../store/products/thunks'

import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text>{item.tradingName}</Text>
    <Text>{item.phone}</Text>
    <Text></Text>
  </View>
);

const Products = (props) => {
  const { maps, requestProducts, products } = props

  const fetchData = async () => {
    await requestProducts(maps.list.results[0].geometry.location.lat, maps.list.results[0].geometry.location.lng)
  }

  useEffect(() => { 
    fetchData()
  }, []);

  return (
      <View style={styles.container} >
        {
          products.loading && <ActivityIndicator size="large" color="#F0FF00" />
        }
        <Text style={styles.title}>List Products</Text>
        {
          products.list && 
            <FlatList
              data={products.list.pocSearch}
              keyExtractor={result => result.id}
              //ItemSeparatorComponent={}
              renderItem={renderItem}
            />
        }
        {
          products.list && console.log(products.list.pocSearch)
        }
    </View>
  )
}

const mapStateToProps = (state) => ({
  maps: state.maps,
  products: state.products
})

export default connect(mapStateToProps, {
  requestProducts
})(Products)