import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';

useScreens();

const rootReducer = combineReducers({
	meals: mealsReducer
});

const store = createStore();

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading startAsync={fetchFonts} onFinish={setFontLoaded(true)} />
		);
	}

	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({});
