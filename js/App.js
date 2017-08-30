/**
 * @flow
 */

import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

import { AppNavigator } from './AppNavigator'

type SelectProps = {
  navigation: Object
}

type Props = SelectProps & { dispatch: Function }

function AppBase(props: Props): React.Element<any> {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: props.dispatch,
          state: props.navigation,
        })}
      />
    </View>
  )
}

function select(state: Object): SelectProps {
  return {
    navigation: state.navigation,
  }
}

export const App = connect(select)(AppBase)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
