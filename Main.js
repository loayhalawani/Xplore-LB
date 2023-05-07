import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList} from 'react-native';

import Home from './Home';

function Main({navigation}) {
  const categoryData = [
    {
      id: 1,
      name: "Beirut",
    },
    {
      id: 2,
      name: "Akkar",
    },
    {
      id: 3,
      name: "North",
    },
    {
      id: 4,
      name: "Mt. Lebanon",
    },
    {
      id: 5,
      name: "South",
    },
    {
      id: 6,
      name: "Baalbek-Hermel",
    },
    {
      id: 7,
      name: "Beqaa",
    },
    {
      id: 8,
      name: "Nabatieh",
    },
  ]

  const siteData = [
    {
      id: 1,
      name: "Beirut Souks",
      rating: "4.8",
      categories: [1],
      photo: require('./assets/Beirut-Souks.jpg'),
    },
    {
      id: 2,
      name: "The National Museum of Beirut",
      rating: "4.2",
      categories: [1],
      photo: require('./assets/Museum.jpg'),
    },
    {
      id: 3,
      name: "Qammouaa Nature Reserve",
      rating: "4.4",
      categories: [2],
      photo: require('./assets/Nature.jpg'),
    },
    {
      id: 4,
      name: "Halba Citadel",
      rating: "4.1",
      categories: [2],
      photo: require('./assets/Halba.jpg'),
    },
    {
      id: 5,
      name: "Byblos",
      rating: "4.9",
      categories: [3],
      photo: require('./assets/Byblos.jpg'),
    },
    {
      id: 6,
      name: "The Cedars of God",
      rating: "4.6",
      categories: [3],
      photo: require('./assets/Cedars.jpg'),
    },
    {
      id: 7,
      name: "Jeita Grotto",
      rating: "4.7",
      categories: [4],
      photo: require('./assets/Jeita.jpg'),
    },
    {
      id: 8,
      name: "Beit ed-Dine Palace",
      rating: "4.2",
      categories: [4],
      photo: require('./assets/Beit.jpg'),
    },
    {
      id: 9,
      name: "Tyre",
      rating: "4.3",
      categories: [5],
      photo: require('./assets/Tyre.jpg'),
    },
    {
      id: 10,
      name: "Al-Bass Archaeological Site",
      rating: "4.5",
      categories: [5],
      photo: require('./assets/Al-Bass.jpg'),
    },
    {
      id: 11,
      name: "Baalbek",
      rating: "4.4",
      categories: [6],
      photo: require('./assets/Baalbek.jpg'),
    },
    {
      id: 12,
      name: "Qadisha Valley",
      rating: "4.5",
      categories: [6],
      photo: require('./assets/Qadisha.jpg'),
    },
    {
      id: 13,
      name: "Qaraoun Lake",
      rating: "4.7",
      categories: [7],
      photo: require('./assets/Lake.jpg'),
    },
    {
      id: 14,
      name: "Ksara Winery",
      rating: "4.4",
      categories: [7],
      photo: require('./assets/Winery.jpg'),
    },
    {
      id: 15,
      name: "Beaufort Castle",
      rating: "4.8",
      categories: [8],
      photo: require('./assets/Castle.jpg'),
    },
    {
      id: 16,
      name: "Deir Al Zahrani",
      rating: "4.7",
      categories: [8],
      photo: require('./assets/Deir.jpg'),
    },
  ]
  
  const [categories, setCategories] = React.useState(categoryData)
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [sites, setSites] = React.useState(siteData)

  function onSelectCategory(category) {
    let siteList = siteData.filter(a => a.categories.includes(category.id))
    setSites(siteList)
    setSelectedCategory(category)
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id)
    if (category.length > 0)
      return category[0].name
    return ""
  }
  
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.filters} onPress={() => onSelectCategory(item)}>
        <Text style={styles.filtersText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderItem1 = ({item}) => {
    return (
      <TouchableOpacity style={styles.sites}>
        <View>
          <Image source={item.photo} resizeMode="cover" style={styles.siteImages} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.desc}>
          <Image source={require('./assets/star.png')} style={styles.star} />
          <Text style={styles.rate}>{item.rating}</Text>
          <Text>{item.categories.map((categoryId) => {
            return (
              <View key={categoryId}>
                <Text style={styles.cat}>{getCategoryNameById(categoryId)}</Text>
              </View>
            )
          })}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Image source={require("./assets/user.png")} style={styles.user} />
        <TouchableOpacity onPress={() => navigation.navigate(Home)}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Image source={require("./assets/filter.png")} style={styles.filter} />
        <FlatList data={categories} horizontal showHorizontalScrollIndicator={true} renderItem={renderItem} keyExtractor={item => '${item.id}'} />
      </View>
      <View style={styles.container3}>
        <FlatList data={sites} keyExtractor={item => '${item.id}'} renderItem={renderItem1} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  container1: {
    backgroundColor: '#EE161F',
    flexDirection: 'row',
    height: 50,
  },

  container2: {
    backgroundColor: '#00A850',
    flexDirection: 'row',
    height: 50,
    marginBottom: 20,
  },

  container3: {
    marginBottom: 100,
  },

  user: {
    width: 50,
    height: 50,
  },

  filter: {
    marginTop: '2.3%',
    marginLeft: '3%',
    width: 30,
    height: 30,
  },

  logout: {
    flex: 1,
    fontSize: 20,
    color: "#FFF",
    paddingLeft: '68%',
    paddingTop: '2.5%',
    justifyContent: "center",
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },

  filters: {
    flex: 1,
    padding: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: "#FFF",
    borderWidth: 1,
    marginLeft: 7.5,
    height: 35,
    marginTop: 6,
    width: 125,
  },

  filtersText: {
    color: "#FFF",
    fontSize: 20,
    paddingTop: 0.5,
  },

  sites: {
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 45,
  },

  siteImages: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 5,
  },

  title: {
    fontSize: 30,
    paddingTop: 5,
    fontWeight: 'bold',
  },

  desc: {
    marginTop: 7.5,
    flexDirection: 'row',
  },

  star: {
    height: 20,
    width: 20,
    marginRight: 10,
  },

  rate: {
    marginRight: 10,
  },

  cat: {
    fontSize: 15,
    paddingTop: 1.5,
  },
});

export default Main;