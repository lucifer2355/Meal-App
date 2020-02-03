import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CategoryMealsScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>The Categories Meals Screen!</Text>
			<Button
				title="Go to Meal Details!"
				onPress={() => {
					props.navigation.navigate({ routeName: 'MealDetail' });
				}}
			/>
			<Button
				title="Back"
				onPress={() => {
					props.navigation.goBack();
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
