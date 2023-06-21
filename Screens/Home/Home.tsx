import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './styles'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import SortingContext from '../../Context/sortContext'

const Home = () => {

  const [profileData, setProfileData] = useState([])
  // const [sortOrder, setSortOrder] = useState('asc')
  const [sortedData, setSortedData] = useState([])
  const { sortOrder, setSortOrder } = useContext(SortingContext)

  const testProfileData = [
    {
      id: '1',
      firstname: 'John',
      surname: 'Doe',
    },
    {
      id: '2',
      firstname: 'Jane',
      surname: 'Doe',
    },
    {
      id: '3',
      firstname: 'John',
      surname: 'Smith',
    },
    {
      id: '4',
      firstname: 'Jane',
      surname: 'Smith',
    },
    
  ]

  const sortProfileData = (data: object) => {
    // sort the profiles in ascending and descending order of the first name
    
    // if the sort order is ascending, sort the data in ascending order
    if (sortOrder === 'asc' && data?.firstname) {
      const sortedData = data?.firstname.sort((a: any, b: any) => {
        if (a.firstname < b.firstname) {
          return -1
        }
        if (a.firstname > b.firstname) {
          return 1
        }
        return 0
      })
      setSortedData(sortedData)
      setSortOrder('desc')
      console.log("Sorted Data ->", sortedData)
    }

  }

  useEffect(() => {
    sortProfileData(profileData)
  }, [sortOrder])

  useEffect(() => {
    getUserProfiles()
  }, [])

  const getUserProfiles = async () => {
    const response = await fetch('https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17')
    const data = await response.json()
    console.log(data)
    setProfileData(data)
  }

  const ProfileItem = ({ data }: { data: object }) => (
    <TouchableOpacity style={styles.profileItem} activeOpacity={0.8}>
      <Image source={{uri: data.picture}} style={styles.profileImg} />
      <View style={styles.profileTextContainer}>
        <Text style={styles.name}>{data.firstname} {data.surname}</Text>
        <Text style={styles.description}>{data.company}</Text>
        <Text style={styles.email}>{data.email}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.profileList}>
        <FlatList
          data={profileData}
          renderItem={({item}) => <ProfileItem data={item} />}
          keyExtractor={item => item.index}
        />
      </View>
    </View>
  )
}

export default Home