import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class RecentPosts extends React.Component {
  return (
    <ScrollView style={styles.container}>
    </ScrollView>
  );
}

RecentPosts.navigationOptions = {
  title: 'Recent Posts',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default withNavigation(RecentPosts);
