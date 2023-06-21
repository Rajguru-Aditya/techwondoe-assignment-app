import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import styles from './styles'
import AntIcons from 'react-native-vector-icons/AntDesign'
import FAIcons from 'react-native-vector-icons/FontAwesome'
import SortingContext from '../../Context/sortContext'

const HomeHeader = () => {

  const { sortOrder, setSortOrder } = useContext(SortingContext)

  const sort = () => {
    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else {
      setSortOrder('asc')
    }
  }

  return (
    <View style={styles.headerContainer}>
      <View  style={styles.searchBar}>
        <AntIcons name="search1" size={25} color="#999" />
        <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor="#999" />
      </View>
        <TouchableOpacity style={styles.iconsContainer} activeOpacity={0.8}
          onPress={() => {
            console.log("Sort Order ->", sortOrder);
            sort()
          }}
        >
          <View style={styles.filterIcon}>
            <FAIcons name="sort-amount-asc" size={20} color="#999" />
          </View>
        </TouchableOpacity>
    </View>
  )
}

export default HomeHeader