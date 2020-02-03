import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailsScreen = props => {
	const mealId = props.navigation.getParam('mealId');

	const selecteMeal = MEALS.find(meal => meal.id === mealId);

	return (
		<View style={styles.screen}>
			<Text>{selecteMeal.title}</Text>
			<Button
				title="Go to Category!"
				onPress={() => {
					props.navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailsScreen.navigationOptions = navigationData => {
	const mealId = navigationData.navigation.getParam('mealId');
	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	return {
		headerTitle: selectedMeal.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Favorite"
					iconName="ios-star"
					onPress={() => {
						console.log('Hello');
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MealDetailsScreen;
