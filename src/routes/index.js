import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from '../screens/main'
import Products from '../screens/products'


const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Products
  })
);

export default Routes