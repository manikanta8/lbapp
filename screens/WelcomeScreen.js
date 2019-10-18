import React from 'react';
import { ScrollView, StyleSheet, Button, View, Alert} from 'react-native';
import { withNavigation } from 'react-navigation';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <View  style={styles.loginContainer}>
      <Button
         title="Login"
         onPress={() => this.props.navigation.navigate('Login')}
      />
      <Button
         title="SignUp"
         onPress={() => this.props.navigation.navigate('Register')}
      />
      </View>
      </ScrollView>
    );
  }
}

WelcomeScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  }});

export default withNavigation(WelcomeScreen);
