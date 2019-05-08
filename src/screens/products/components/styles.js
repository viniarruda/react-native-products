import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  card: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    shadowOffset: {  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    padding: 20,
    borderRadius: 5
  }
})

export default styles