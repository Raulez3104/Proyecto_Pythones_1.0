import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const ComponentName: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.caja}>
        <Text style={styles.contenido}>Juan Perez</Text>
      </View>

      <View style={styles.caja}>
        <Text style={styles.contenido}>Maria Lopez</Text>
      </View>
      
    </View>
  );
};

export default ComponentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    padding: 10,
  },

  caja:{
    flexDirection: 'column',
    height: 100,
    width: '100%',
    backgroundColor: '#d9ebeeff',
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center', 
    paddingLeft: 15,          
  },

  contenido:{
    fontSize: 18,
    color: '#333',
  }
});