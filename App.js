import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import { Login } from './src/screens/Login'
import { Logout } from './src/screens/Logout'
import { Signup } from './src/screens/Signup'
import { Home } from './src/screens/Home'
import {createContext, Context, useState, useEffect} from 'react';
import {Button} from 'react-native-web';
import { Cart } from './src/screens/Cart'


const Drawer = createDrawerNavigator()

export const UserContext = createContext({})

export default function App({navigation}) {
  const [isSignedIn,setIsSignedIn] = useState(false)
  const [user,setUser] = useState({})



	return (
    <UserContext.Provider value={{isSignedIn,setIsSignedIn, user, setUser}}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          {isSignedIn ?
              <>
                <Drawer.Screen name='Home' component={Home} />
                <Drawer.Screen name="Cart" component={Cart} />
                <Drawer.Screen name="Logout" component={Logout} />
              </>
              : <>
                <Drawer.Screen name='Login' component={Login} />
                <Drawer.Screen name='Signup' component={Signup} />
              </>
          }


        </Drawer.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
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
