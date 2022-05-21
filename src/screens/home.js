import { Text } from "../components/text/text";
import { SafeAreaView, StyleSheet, FlatList, View, Pressable } from "react-native";
import Header from "../components/header";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/planet-list";
import { spacing } from "../theme/spacing";
import { AntDesign } from '@expo/vector-icons';
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => navigation.navigate('Details', { planets: item })}
              style={styles.item} >
              <View style={[styles.circle, { backgroundColor: item.color }]} />
              <Text preset="h4" style={styles.itemName}>{item.name}</Text>
              <AntDesign name="right" size={16} color="white" style={{ marginLeft: "auto" }} />
            </Pressable>
          )
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  list: {
    padding: spacing[5]
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4]
  },
  itemName: {
    textTransform: "uppercase",
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: spacing[4]
  },
  separator: {
    height: .4,
    backgroundColor: colors.white
  }
})
export default Home