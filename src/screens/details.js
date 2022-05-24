import { SafeAreaView, StyleSheet, View, ScrollView, Pressable, Linking } from "react-native"
import Header from "../components/header"
import { Text } from "../components/text/text"
import { colors } from "../theme/colors"
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from "../svg"
import { spacing } from "../theme/spacing"
import { FontAwesome5 } from '@expo/vector-icons';

const Details = ({ route }) => {
  const { planets } = route.params
  const { name, description, wikiLink, rotationTime, revolutionTime, radius, avgTemp } = planets

  const InfoBox = ({ title, value }) => {
    return (
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxTitle}>{title}</Text>
        <Text preset="h2" style={styles.infoBoxValue}>{value}</Text>
      </View>
    )
  }

  const openUrl = () => {
    Linking.openURL(wikiLink)
  }
  const renderImage = () => {
    switch (name) {
      case "earth":
        return <EarthSvg />
      case "jupiter":
        return <JupiterSvg />
      case "mars":
        return <MarsSvg />
      case "mercury":
        return <MercurySvg />
      case "neptune":
        return <NeptuneSvg />
      case "saturn":
        return <SaturnSvg />
      case "uranus":
        return <UranusSvg />
      case "venus":
        return <VenusSvg />
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header backBtn={true} title={name} />
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            {renderImage()}
          </View>
          <View style={styles.textContainer}>
            <Text preset="h1" style={{ fontSize: 50, textTransform: "uppercase" }}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Pressable style={styles.link} onPress={openUrl}>
              <Text >Source: &nbsp;</Text>
              <Text preset="h4" style={{ textDecorationLine: 'underline' }}>Wikipidia</Text>
              <Text>&nbsp; </Text>
              <FontAwesome5 name="external-link-alt" size={16} color="white" />
            </Pressable>
          </View>
          <InfoBox title="Rotation Time" value={rotationTime} />
          <InfoBox title="Revolution Time" value={revolutionTime} />
          <InfoBox title="Radius" value={radius} />
          <InfoBox title="Avg Temp" value={avgTemp} />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: 40,
    padding: spacing[8]
  },
  textContainer: {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[7],
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing[7],
  },
  description: {
    textAlign: "center",
    marginVertical: spacing[4],
    lineHeight: 24
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: spacing[2]
  },
  infoBox: {
    width: '90%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: spacing[3],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.white,
  },
  infoBoxTitle: {
    textTransform: "uppercase",
  },
  infoBoxValue: {}
})

export default Details