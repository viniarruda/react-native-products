import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { requestPoc, requestProducts } from '../../store/products/thunks'
import { requestCategories } from '../../store/categories/thunks'

import { View, Text, FlatList, Image, Picker, TextInput, TouchableOpacity } from 'react-native'
import Loader from '../../components/loader'
import styles from './components/styles'

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={{uri: item.productVariants[0].imageUrl ? item.productVariants[0].imageUrl : 'http://chittagongit.com/download/296961'}} />
    <Text>{item.productVariants[0].title}</Text>
    <Text>R${item.productVariants[0].price}</Text>
    {
      item.productVariants[0].description &&
      <Text>{item.productVariants[0].description}</Text>
    }
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
    let initialCategory = 0
    let search = ""
    await requestCategories()
    await requestProducts(search, initialCategory)
  }

  useEffect(() => { 
    fetchData()
  }, []);

  return (
      <View style={styles.container} >
        <Loader loading={!categories.list || !products.list || !products.poc} />
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
                  <Picker.Item key="none" label="Select..." value="0" />,
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
              keyExtractor={result => result.productVariants[0].productVariantId}
              //ItemSeparatorComponent={}
              renderItem={renderItem}
              style={styles.cardList}
            />
        }
        {
          products.list && console.log('prod', products.list)
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