import { View, StyleSheet, Pressable, NativeModules, Platform } from "react-native"
import { colors } from "../theme/colors"
import { spacing } from "../theme/spacing"
import { Text } from "./text/text"
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const { StatusBarManager } = NativeModules;


const Header = ({ backBtn, title = "The Planets" }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginEnd: spacing[4] }}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h2" style={{ textTransform: "uppercase" }}> {title} </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomWidth: .5,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0
  }
})

export default Header


