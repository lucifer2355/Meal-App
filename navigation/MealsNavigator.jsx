import React from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator,
	createDrawerNavigator
} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FiltersScreen from '../screens/FiltersScreen';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
	headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
	{
		Categories: {
			screen: CategoriesScreen,
			navigationOptions: {
				headerTitle: 'Meal Categories'
			}
		},
		CategoryMeals: {
			screen: CategoryMealsScreen
		},
		MealDetail: { screen: MealDetailsScreen }
	},
	{
		defaultNavigationOptions: defaultStackNavOptions
	}
);

const FavNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailsScreen
	},
	{
		defaultNavigationOptions: defaultStackNavOptions
	}
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return (
					<Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
				);
			},
			tabBarColor: Colors.primaryColor
		}
	},
	Favorites: {
		screen: FavNavigator,
		navigationOptions: {
			tabBarIcon: tabInfo => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: Colors.accentColor
		}
	}
};

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeTintColor: 'white',
				shifting: true,
				barStyle: {
					backgroundColor: Colors.primaryColor
				}
		  })
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor
				}
		  });

const FiltersNavigator = createStackNavigator({
	Filters: FiltersScreen
});

const MainNavigator = createDrawerNavigator({
	MealsFavs: MealsFavTabNavigator,
	Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
