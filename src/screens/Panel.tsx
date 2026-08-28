import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TecnicosView from './TecnicosView'; 


const PanelScreen: React.FC = () => {

  
  const [vistaActiva, setVistaActiva] = useState<'tecnicos' | 'ventas' | 'clientes'>('tecnicos');

  return (
    <View style={styles.container}>

      
      <View style={styles.grupo1}>
        <View style={[styles.box, { backgroundColor: '#1b2d3dff' }]}>
          <MaterialCommunityIcons name="account-group" size={40} color="white" />
          <Text style={styles.text}>Total de Técnicos</Text>
          <Text style={styles.text}>2</Text>
        </View>

        <View style={[styles.box, { backgroundColor: '#1b2d3dff' }]}>
          <MaterialCommunityIcons name="cash" size={40} color="white" />
          <Text style={styles.text}>Ventas Mensuales</Text>
          <Text style={styles.text}>54</Text>
        </View>
      </View>

     
      <View style={styles.panelNav}>
        <TouchableOpacity
          style={[
            styles.navButton,
            vistaActiva === 'tecnicos' && styles.activeButton
          ]}
          onPress={() => setVistaActiva('tecnicos')}
        >
          <Text style={styles.navText}>Técnicos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            vistaActiva === 'ventas' && styles.activeButton
          ]}
          onPress={() => setVistaActiva('ventas')}
        >
          <Text style={styles.navText}>Ventas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            vistaActiva === 'clientes' && styles.activeButton
          ]}
          onPress={() => setVistaActiva('clientes')}
        >
          <Text style={styles.navText}>Clientes</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.content}>
         {vistaActiva === 'tecnicos' && <TecnicosView />}
         {vistaActiva === 'ventas' && <Text style={styles.contentText}>VENTAS</Text>}
         {vistaActiva === 'clientes' && <Text style={styles.contentText}>CLIENTES</Text>}
      </View>

    </View>
  );
};

export default PanelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#7495ac',
  },

  grupo1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },

  box: {
    width: '40%',
    height: 115,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  panelNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#e0e0e0',
    marginTop: 40,
    borderRadius: 8,
  },

  navButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#485966ff',
  },

  activeButton: {
    backgroundColor: '#5b8db8',
  },

  navText: {
    color: 'white',
    fontWeight: 'bold',
  },

  content: {
    marginTop: 25,
    width: '100%', 
    flex: 1,       
  },

  contentText: {
  fontSize: 26,
  fontWeight: 'bold',
  color: '#4a4a4a',
  textAlign: 'center',
  marginTop: 20,
}
});