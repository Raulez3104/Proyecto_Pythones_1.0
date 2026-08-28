import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TodosView from './TodosView';

const TecnicosView = () => {

  const [busqueda, setBusqueda] = useState('');

  
  const [seccion, setSeccion] = useState<'Todos' | 'Verificados' | 'Pendientes'>('Todos');

  return (
    <View style={styles.container}>
      
      
      <TextInput
        placeholder="Buscar técnico..."
        value={busqueda}
        onChangeText={setBusqueda}
        style={styles.searchInput}
      />

      
      <View style={styles.panelNav}>
        <TouchableOpacity
          style={[
            styles.navButton,
            seccion === 'Todos' && styles.activeButton
          ]}
          onPress={() => setSeccion('Todos')}
        >
          <Text style={styles.navText}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            seccion === 'Verificados' && styles.activeButton
          ]}
          onPress={() => setSeccion('Verificados')}
        >
          <Text style={styles.navText}>Verificados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            seccion === 'Pendientes' && styles.activeButton
          ]}
          onPress={() => setSeccion('Pendientes')}
        >
          <Text style={styles.navText}>Pendientes</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.content}>
        {seccion === 'Todos' && <TodosView />}
        {seccion === 'Verificados' && <Text style={styles.contentText}>Técnicos Verificados</Text>}
        {seccion === 'Pendientes' && <Text style={styles.contentText}>Técnicos Pendientes</Text>}
      </View>

    </View>
  );
};

export default TecnicosView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 10,
    width: '100%',
    alignSelf: 'stretch',
  },

  panelNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#e0e0e0',
    marginTop: 15,
    borderRadius: 8,
  },

  navButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#485966ff',
  },

  activeButton: {
    backgroundColor: '#0e509bff',
  },

  navText: {
    color: 'white',
    fontWeight: 'bold',
  },

  content: {
    marginTop: 20,
    width: '100%',
    
  },

  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});