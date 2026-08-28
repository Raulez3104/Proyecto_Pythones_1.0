import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const AjustesScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Ajustes</Text>
    </View>
  );
};

export default AjustesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});