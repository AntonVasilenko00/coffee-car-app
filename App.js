import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Login } from './src/screens/Login'
import { Signup } from './src/screens/Signup'
import { colors } from './src/constants/styles'

const Drawer = createDrawerNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Login'>
				<Drawer.Screen name='Login' component={Login} />
				<Drawer.Screen name='Signup' component={Signup} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
