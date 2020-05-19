import React, {useState} from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const App = () => {
  const [drawerPosition, setDrawerPosition] = useState('left');
  const changeDrawerPosition = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{margin: 10, fontSize: 15}}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <Text style={{margin: 10, fontSize: 15}}>
          DrawerLayoutAndroid example
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={{margin: 10, fontSize: 15}}>
          Drawer on the {drawerPosition}! Swipe from the side to see!
        </Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '50px',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: '50px',
    backgroundColor: '#fff',
    padding: 8,
  },
});

export default App;
