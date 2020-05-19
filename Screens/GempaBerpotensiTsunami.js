import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import {getApi} from '../functions.js';
import {styles} from '../styles.js';

export default class GempaBerpotensiTsunami extends Component {
  getGempaBumiTerkini() {
    return getApi('https://data.bmkg.go.id/lasttsunami.xml', result => {
      this.setState({result: result.Infotsunami.Gempa});
    });
  }

  componentDidMount() {
    this.getGempaBumiTerkini();
  }
  constructor(props) {
    super(props);

    this.state = {
      result: {},
    };
  }

  render() {
    const state = this.state.result;
    return (
      <View style={styles.box}>
        <FlatList
          data={[
            {key: `Tanggal: ${state.Tanggal ? state.Tanggal._text : ''}`},
            {key: `Jam: ${state.Jam ? state.Jam._text : ''}`},
            {key: `Lintang: ${state.Lintang ? state.Lintang._text : ''}`},
            {key: `Bujur: ${state.Bujur ? state.Bujur._text : ''}`},
            {key: `Magnitude: ${state.Magnitude ? state.Magnitude._text : ''}`},
            {key: `Kedalaman: ${state.Kedalaman ? state.Kedalaman._text : ''}`},
            {key: `Area: ${state.Area ? state.Area._text : ''}`},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
