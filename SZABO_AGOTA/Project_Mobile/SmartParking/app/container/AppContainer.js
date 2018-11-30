//@flow
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";
import HomePage from "../pages/HomePage";

// const AppNavigator = StackNavigator({
//   HomePage: {screen: HomePage }
// }, 
// { 
//   mode: "modal",
//   headerMode: "none",
// });

class AppContainer extends Component {
  render() {
    return (
      <HomePage/>
    )
  }
}
function mapStateToProps(state) {
  return {
    navigationReducer: state.navigationReducer
  };
}

export default connect(mapStateToProps)(AppContainer);

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
