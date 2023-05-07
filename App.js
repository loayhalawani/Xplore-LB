import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Main from './Main';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{title: null}} />
        <Stack.Screen name="Login" component={Login} options={{title: null}} />
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;