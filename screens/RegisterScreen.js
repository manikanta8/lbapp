import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import deviceWindow from '../constants/Layout'
import { Button, Input, CheckBox } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



class RegisterScreen extends React.Component{
  state = {
    checked: false
    };
  render() {
    return (
        <KeyboardAwareScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Image
          source={require('../assets/images/ic_launcher.png')}
          style={styles.welcomeImageContainer}/>
          <View style= {styles.registerContainer}>
          <Input placeholder='Enter Name'
          label = 'Name'
          />
          <Input placeholder='Enter Mobile No'
          label = 'Mobile No'
          containerStyle = {styles.inputContainer}/>
          <Input placeholder='Enter Address'
          label = 'Address'
          containerStyle = {styles.inputContainer}/>
          </View>
          <View>
          <CheckBox title='User'
          checked={this.state.checked}/>
          <CheckBox title='Real Estate Broker/Agent'
          checked={this.state.checked}/>
          <CheckBox title='Classified Agent/Reporter'
          checked={this.state.checked}/>
          </View>
          <Button
          style = {styles.buttonStyle}
          title = 'REGISTER'>
          </Button>
          </KeyboardAwareScrollView>)

  }
}

RegisterScreen.navigationOptions = {
  title: 'Register',
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeImageContainer: {
    marginTop: 30,
    height: deviceWindow.window.height/4,
    width: deviceWindow.window.width/2,
    alignSelf: 'center',
  },
  registerContainer: {
    margin: 10
  },
  inputContainer: {
    marginTop: 10
  },
  buttonStyle: {
    margin: 10
  }
});

export default withNavigation(RegisterScreen);
