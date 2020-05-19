import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

import {getApi} from '../functions.js';
import {styles} from '../styles.js';

export default class GempaTerkini extends Component {
  getGempaBumiTerkini() {
    return getApi('https://data.bmkg.go.id/autogempa.xml', result => {
      this.setState({result: result.Infogempa.gempa});
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
            { key: `Tanggal: ${state.Tanggal ? state.Tanggal._text : ''}`}, 
            { key: `Jam: ${state.Jam ? state.Jam._text : ''}`}, 
            { key: `Koordinat: ${ state.point ? state.point.coordinates._text : '' }`}, 
            { key: `Lintang: ${state.Lintang ? state.Lintang._text : ''}`}, 
            { key: `Bujur: ${state.Bujur ? state.Bujur._text : ''}`}, 
            { key: `Magnitude: ${state.Magnitude ? state.Magnitude._text : ''}`}, 
            { key: `Kedalaman: ${state.Kedalaman ? state.Kedalaman._text : ''}`}, 
            { key: `Potensi: ${state.Potensi ? state.Potensi._text : ''}`}, 
            { key: `Wilayah1: ${state.Wilayah1 ? state.Wilayah1._text : ''}`}, 
            { key: `Wilayah2: ${state.Wilayah2 ? state.Wilayah2._text : ''}`}, 
            { key: `Wilayah3: ${state.Wilayah3 ? state.Wilayah3._text : ''}`}, 
            { key: `Wilayah4: ${state.Wilayah4 ? state.Wilayah4._text : ''}`}, 
            { key: `Wilayah5: ${state.Wilayah5 ? state.Wilayah5._text : ''}`},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
