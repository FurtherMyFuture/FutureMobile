/**
 * @flow
 * @providesModule VideoComponent
 */

import React from "react";
import { AppState, StyleSheet, View } from "react-native";

import Video from "react-native-video";

type Props = {
  source: { uri: string } | number,
  children?: React.Element<any>,
  muted: boolean
};

type State = {
  paused: boolean,
  muted: boolean
};

export class VideoComponent extends React.Component {
  props: Props;
  state: State = {
    paused: false,
    muted: this.props.muted
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  render(): React.Element<any> {
    const { source, children } = this.props;
    return (
      <View style={styles.container}>
        <Video
          paused={this.state.paused}
          muted={this.state.muted}
          repeat
          resizeMode="cover"
          source={source}
          disableFocus
          style={StyleSheet.absoluteFill}
        />
        <View style={StyleSheet.absoluteFill}>
          {React.Children.only(children)}
        </View>
      </View>
    );
  }

  _handleAppStateChange = (
    currentAppState: "active" | "background" | "inactive"
  ) => {
    this.setState({ paused: currentAppState !== "active" });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
