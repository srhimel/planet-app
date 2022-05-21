import { SafeAreaView, StyleSheet } from "react-native"
import Header from "../components/header"
import { Text } from "../components/text/text"
import { colors } from "../theme/colors"

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn={true} title="Details" />
      <Text>Hello</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  }
})

export default Details