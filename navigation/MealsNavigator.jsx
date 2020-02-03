import React from 'react';
import {
	createStackNavigator,
	createAppContainer,
	createBottomTabNavigator
} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

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
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
			},
			headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
		}
	}
);

const MealsFavTabNavigator = createBottomTabNavigator(
	{
		Meals: {
			screen: MealsNavigator,
			navigationOptions: {
				tabBarIcon: tabInfo => {
					return (
						<Ionicons
							name="ios-restaurant"
							size={25}
							color={tabInfo.tintColor}
						/>
					);
				}
			}
		},
		Favorites: {
			screen: FavoritesScreen,
			navigationOptions: {
				tabBarIcon: tabInfo => {
					return (
						<Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: Colors.accentColor
		}
	}
);

export default createAppContainer(MealsFavTabNavigator);
