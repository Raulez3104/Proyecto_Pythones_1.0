import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const ReportesScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Reportes</Text>
    </View>
  );
};

export default ReportesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});