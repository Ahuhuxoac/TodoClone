import HomeScreen from './src/screen/HomeScreen';
import ItemScreen from './src/screen/ItemScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import{ store} from './src/redux/store';
import { Provider } from 'react-redux';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="ItemScreen" component={ItemScreen}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
    // <HomeScreen />
  );
}


