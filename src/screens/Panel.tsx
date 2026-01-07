import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const PanelScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: '#9fbfdaff' }]}>
        <Text style={styles.text}>Total Tecnicos</Text>
      </View>
      <View style={[styles.box, { backgroundColor: '#9fbfdaff' }]}>
        <Text style={styles.text}>Ventas Mensuales</Text>
      </View>
    </View>
  );
};

export default PanelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});