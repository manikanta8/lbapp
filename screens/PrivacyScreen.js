import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class PrivacyScreen extends React.Component {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

PrivacyScreen.navigationOptions = {
  title: 'Privacy',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default withNavigation(PrivacyScreen);
