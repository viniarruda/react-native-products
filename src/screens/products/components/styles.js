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
  },
  picker: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 30,
    height: 50, 
    width: 200
  },
  pickerSelect: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
  }
})

export default styles