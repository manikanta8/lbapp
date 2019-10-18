import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class WalletScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    )
  }}

WalletScreen.navigationOptions = {
  title: 'Wallet',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default withNavigation(WalletScreen);
