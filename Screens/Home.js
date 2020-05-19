import React, {Component, UseState, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';


export default class Home extends Component {
  render() {
    const items = [
      {name: 'Gempabumi M 5.0+ Terkini', code: '#1abc9c', to: 'GempaTerkini'},
      {name: 'Gempabumi M 5.0+', code: '#2ecc71', to: 'DaftarGempa'},
      {name: 'Gempabumi Dirasakan', code: '#3498db', to: 'GempaDirasakan'},
      {
        name: 'Gempabumi Berpotensi Tsunami',
        code: '#9b59b6',
        to: 'GempaBerpotensiTsunami',
      },
    ];

    return (
      <Fragment>
          <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          renderItem={({item, index}) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => this.props.navigation.navigate(item.to)}>
              <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
        <Text style={{textAlign:'center'}}>
          Sumber data: BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)
        </Text>
        <Text style={{textAlign:'center', marginBottom:15}}>
          https://data.bmkg.go.id/gempabumi/
        </Text>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});
