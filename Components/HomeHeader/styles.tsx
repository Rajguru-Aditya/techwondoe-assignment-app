import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: 10,
  },

  basicText: {
    fontSize: 14,
    color: '#222',
  },

  searchBar: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 50,
    paddingHorizontal: 10,
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  filterIcon: {
    backgroundColor: '#eee',
    borderRadius: 50,
    padding: 10,
    boxSizing: 'border-box',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 50,
    width: 50,
  },

  textInput: {
    flex: 1,
    fontSize: 14,
    height: "100%",
  },
})

export default styles