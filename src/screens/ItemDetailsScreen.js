import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ItemDetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Item Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});