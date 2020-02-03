import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
    </View>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
