import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../colors';
import PlaceItem from './PlaceItem';

const Placelist = ({places}) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={item => {
        item.id;
      }}
      renderItem={({item}) => <PlaceItem place={item} />}
    />
  );
};

export default Placelist;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200
  },
});
