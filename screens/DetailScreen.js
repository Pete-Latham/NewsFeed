import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Text } from 'react-native';
import { WebBrowser } from 'expo';

import moment from 'moment';

class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  static navigationOptions = () => ({
    title: 'BBC News',
    headerStyle: {
      backgroundColor: '#d35400',
    },
    headerTintColor: '#ffffff',
    result: '',
  });

  // handlePress = async () => {
  //   let { url } = this.props.navigation.getParam('news');
  //   let result = await WebBrowser.openBrowserAsync(url);
  //   this.setState({ result });
  // };

  render() {
    let {
      title,
      description,
      urlToImage,
      publishedAt,
      url,
    } = this.props.navigation.getParam('news');

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: urlToImage }} />
        <ScrollView style={styles.textBox}>
          <Text style={styles.articleTitle}>{title}</Text>
          <Text style={styles.publication}>
            Published: {moment(publishedAt).fromNow()}
          </Text>
          <View style={styles.hrCarrier}>
            <View style={styles.hr} />
          </View>
          <Text style={styles.articleDetail}>{description}</Text>
          <Text
            style={styles.more}
            onPress={() => WebBrowser.openBrowserAsync(url)}>
            Read more ...
          </Text>
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
  textBox: {
    width: '90%',
  },
  articleTitle: {
    fontSize: 24,
    marginBottom: 4,
  },
  publication: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  articleDetail: {
    fontSize: 18,
    marginVertical: 5,
  },
  more: {
    fontSize: 16,
    color: '#d35400',
  },
  hrCarrier: {
    alignItems: 'center',
  },
  hr: {
    height: 1,
    borderColor: '#777',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 7,
    width: '90%',
  },
});

export default DetailScreen;
