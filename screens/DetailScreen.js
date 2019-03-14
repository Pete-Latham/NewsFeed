import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text } from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = () => ({
    // title: navigation.getParam('contact').name,
    title: 'BBC News',
    headerStyle: {
      backgroundColor: '#d35400',
    },
    headerTintColor: '#ffffff',
  });

  render() {
    let { title, description, urlToImage } = this.props.navigation.getParam(
      'news'
    );

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: urlToImage }} />
        <ScrollView>
          <Text style={styles.articleTitle}>{title}</Text>
          <View style={styles.hrCarrier}>
            <View style={styles.hr} />
          </View>
          <Text style={styles.articleDetail}>{description}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  detailBox: {
    alignItems: 'flex-start',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  articleDetail: {
    fontSize: 18,
    marginVertical: 5,
  },
  hrCarrier: {
    alignItems: 'center',
  },
  hr: {
    height: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 7,
    width: '90%',
  },
});

export default DetailScreen;
