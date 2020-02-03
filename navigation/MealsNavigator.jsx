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

const MealsFavTabNavigator = createBottomTabNavigator({
	Meals: MealsNavigator,
	Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);
