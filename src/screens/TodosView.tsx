import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {}

const ComponentName: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      
      
      <View style={styles.caja}>
        <MaterialCommunityIcons
          name="account"
          size={40}
          color="#333"
          style={styles.icon}
        />

        <Text style={styles.contenido}>Juan Perez</Text>
      </View>

      {/* Técnico mujer */}
      <View style={styles.caja}>
        <MaterialCommunityIcons
          name="account-outline"
          size={40}
          color="#333"
          style={styles.icon}
        />

        <Text style={styles.contenido}>Maria Lopez</Text>
      </View>

    </View>
  );
};

export default ComponentName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  caja: {
    flexDirection: 'row',       
    alignItems: 'center',       
    height: 100,
    width: '100%',
    backgroundColor: '#d9ebeeff',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 15,      
  },

  icon: {
    marginRight: 15,            
  },

  contenido: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});