import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import {getApi} from '../functions.js';
import {styles} from '../styles.js';

function Card(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.textBox}>Tanggal : {props.item.Tanggal._text}</Text>
      <Text style={styles.textBox}>Jam : {props.item.Jam._text}</Text>
      <Text style={styles.textBox}>Lintang : {props.item.Lintang._text}</Text>
      <Text style={styles.textBox}>Bujur: {props.item.Bujur._text}</Text>
      <Text style={styles.textBox}>
        Magnitude: {props.item.Magnitude._text}
      </Text>
      <Text style={styles.textBox}>
        Kedalaman: {props.item.Kedalaman._text}
      </Text>
      <Text style={styles.textBox}>Wilayah: {props.item.Wilayah._text}</Text>
    </View>
  );
}

export default class DaftarGempa extends Component {
  getDaftarGempa() {
    return getApi('https://data.bmkg.go.id/gempaterkini.xml', result => {
      this.setState({result: result.Infogempa.gempa});
    });
  }

  componentDidMount() {
    this.getDaftarGempa();
  }

  constructor(props) {
    super(props);

    this.state = {
      result: {},
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.result.length ? (
          <FlatList
            data={this.state.result}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <Card item={item} />}
          />
        ) : (
          <Text />
        )}
      </View>
    );
  }
}
