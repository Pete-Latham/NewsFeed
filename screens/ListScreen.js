import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import moment from 'moment';
import axios from 'axios';
// import tempArticleList from '../assets/news.json';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      articleList: '',
    };
    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.getFreshData = this.getFreshData.bind(this);
  }

  static navigationOptions = {
    title: 'BBC News',
    headerStyle: {
      backgroundColor: '#d35400',
    },
    headerTintColor: '#ffffff',
    headerBackTitleVisible: true,
    headerBackTitle: 'Back',
  };

  getFreshData() {
    const API_KEY = '6628fd4aaedd4ecea6142eaf008f8fb8';
    const API_URL = `https://newsapi.org/v2/everything?sources=bbc-news&language=en&apiKey=${API_KEY}`;
    axios
      .get(API_URL)
      .then(({ data }) => {
        this.setState({ articleList: data.articles });
      })
      .catch(error => {
        console.log('Something has gone wrong');
        console.log(error);
      });
  }

  componentDidMount() {
    this.getFreshData();
  }

  onPress(item) {
    this.props.navigation.navigate('Detail', { news: item });
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  renderSeparator() {
    const style = { height: 1, backgroundColor: '#777' };
    return <View style={style} />;
  }

  renderItem({ item }) {
    return (
      <TouchableHighlight
        style={styles.list}
        underlayColor={'#e4e4e4'}
        onPress={() => {
          this.onPress(item); // Use the anonymous function to gain control of the argument passing rather than a reference
        }}>
        <View>
          <Text numberOfLines={1} style={styles.listItem}>
            {item.title}
          </Text>
          <Text style={styles.publication}>
            Published: {moment(item.publishedAt).fromNow()}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <FlatList
        refreshing={false}
        data={this.state.articleList}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  publication: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#777',
  },
  list: {
    justifyContent: 'center',
    height: 60,
  },
  labelText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default ListScreen;
