import { Text as RnText, StyleSheet } from "react-native"
import { presets } from "./text.preset"

export const Text = ({ children, preset = "default", style }) => {
  const textStyle = StyleSheet.compose(presets[preset], style)
  return <RnText style={textStyle}>{children}</RnText>
}