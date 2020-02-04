import React, { useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
	return (
		<View style={styles.filterContainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.primaryColor }}
				thumbColor={Platform.OS === 'android' ? Colors.primaryColor : 'white'}
				value={props.state}
				onValueChange={props.onChange}
			/>
		</View>
	);
};

const FiltersScreen = props => {
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVeganFree, setIsVeganFree] = useState(false);
	const [isVegetarianFree, setIsVegetarianFree] = useState(false);

	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Available Filters / Restrictions</Text>
			<FilterSwitch
				label="Gluten Free"
				state={isGlutenFree}
				onChange={newValue => setIsGlutenFree(newValue)}
			/>
			<FilterSwitch
				label="Lactose Free"
				state={isLactoseFree}
				onChange={newValue => setIsLactoseFree(newValue)}
			/>
			<FilterSwitch
				label="Vegan"
				state={isVeganFree}
				onChange={newValue => setIsVeganFree(newValue)}
			/>
			<FilterSwitch
				label="Vegetarian"
				state={isVegetarianFree}
				onChange={newValue => setIsVegetarianFree(newValue)}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Filter Meal',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="Menu"
					iconName="ios-menu"
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},

	title: {
		fontWeight: 'bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	},

	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '80%',
		marginVertical: 10
	}
});

export default FiltersScreen;
