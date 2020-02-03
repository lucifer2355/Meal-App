import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
	const renderGridItem = itemData => {
		return (
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate({ routeName: 'CategoryMeals' });
				}}
			>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	gridItem: {
		flex: 1,
		margin: 15,
		height: 150
	}
});

export default CategoriesScreen;
