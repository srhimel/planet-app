import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    AntonioMedium: require('./assets/fonts/Antonio-Medium.ttf'),
    SpartanBold: require('./assets/fonts/Spartan-Bold.ttf'),
    SpartanRegular: require('./assets/fonts/Spartan-Regular.ttf')
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
