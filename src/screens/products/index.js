import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { requestPoc, requestProducts } from '../../store/products/thunks'
import { requestCategories } from '../../store/categories/thunks'

import { View, Text, FlatList, ActivityIndicator, Picker, TextInput, TouchableOpacity } from 'react-native'
import Loader from '../../components/loader'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <View style={styles.card}>
    {console.log('products', item)}
    <Text>{item.tradingName}</Text>
    <Text>{item.phone.phoneNumber}</Text>
  </View>
);

const Products = (props) => {
  const { maps, requestPoc, requestProducts, requestCategories, products, categories } = props
  const [pickerValue, setPickerValue] = useState()
  const [searchValue, setSearchValue] = useState("")

  const handleChange = async (value) => {
    await setPickerValue(value)
  }

  const handleFilter = async () => {
    console.log(pickerValue, searchValue)
    await requestProducts(pickerValue)
    await setSearchValue("")
  }

  const fetchData = async () => {
    await requestPoc(maps.list.results[0].geometry.location.lat, maps.list.results[0].geometry.location.lng)
    let initialCategory = ""
    let search = ""
    await requestCategories()
    await requestProducts(search, initialCategory)
  }

  useEffect(() => { 
    fetchData()
  }, []);

  return (
      <View style={styles.container} >
        {/* {
          products.loading && <ActivityIndicator size="large" color="#F0FF00" />
        } */}
        <Text style={styles.title}>List Products</Text>
        <View style={styles.filter}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#999"
            autoCapitalize="none" 
            autoCorrect={false} 
            underlineColorAndroid="transparent"
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            />
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerSelect}
              selectedValue={pickerValue}
              onValueChange={(itemValue, itemIndex) =>
                handleChange(itemValue)
              }
            >
              {
                categories.list && [
                  <Picker.Item key="none" label="Select..." value="none" />,
                  ...(categories.list.allCategory.map((c) => 
                    <Picker.Item key={c.id} label={c.title} value={c.id} />
                ))
                ]
              }
            </Picker>
            <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
              <Text style={styles.textFilterButton}>Filtrar</Text>
            </TouchableOpacity>
        </View>
        {
          products.list && 
            <FlatList
              data={products.list.poc.products}
              keyExtractor={result => result.id}
              //ItemSeparatorComponent={}
              renderItem={renderItem}
            />
        }
        {
          products.list && console.log(products.list)
        }
    </View>
  )
}

const mapStateToProps = (state) => ({
  maps: state.maps,
  products: state.products,
  categories: state.categories
})

export default connect(mapStateToProps, {
  requestPoc,
  requestProducts,
  requestCategories
})(Products)