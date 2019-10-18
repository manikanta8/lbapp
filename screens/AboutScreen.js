import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class AboutScreen extends React.Component {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

AboutScreen.navigationOptions = {
  title: 'About Us',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default withNavigation(AboutScreen);
