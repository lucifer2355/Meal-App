import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
	const renderMealItem = itemData => {
		return (
			<MealItem
				title={itemData.item.title}
				image={itemData.item.imageUrl}
				duration={itemData.item.duration}
				complexity={itemData.item.complexity}
				affordability={itemData.item.affordability}
				onSelectMeal={() => {}}
			/>
		);
	};

	const catId = props.navigation.getParam('categoryId');

	const displayedMeals = MEALS.filter(
		meal => meal.categoryIds.indexOf(catId) >= 0
	);

	return (
		<View style={styles.screen}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem}
				style={{ width: '100%' }}
			/>
		</View>
	);
};

CategoryMealsScreen.navigationOptions = navigationData => {
	const catId = navigationData.navigation.getParam('categoryId');
	const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

	return {
		headerTitle: selectedCategory.title
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default CategoryMealsScreen;
