import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  basicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  profileList: {
    flex: 1,
    marginTop: 20,
  },

  profileItem: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    padding: 10,
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    minHeight: 100,
  },

  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  profileTextContainer: {
    flex: 1,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    fontSize: 14,
    color: '#444',
  },

  email: {
    fontSize: 12,
    color: '#666',
  },
})

export default styles