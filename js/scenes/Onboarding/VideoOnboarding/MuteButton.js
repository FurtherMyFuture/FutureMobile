/**
 * @flow
 */

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
  onPress: () => void,
  muted: boolean,
  testID: string
}

export function MuteButton(props: Props): React.Element<any> {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onPress}
        style={styles.touchable}
        testID={props.testID}
      >
        <Text style={styles.text}>
          {props.muted ? 'Muted 🔇' : 'Mute 🔊'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export const HEIGHT = 44
const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    height: HEIGHT,
    backgroundColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'grey',
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 17,
    flex: 1,
    textAlign: 'center',
  },
})
