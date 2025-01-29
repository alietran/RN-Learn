
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from './src/components/colors';
import IconButton from './src/components/UI/IconButton';
import AddPlace from './src/screens/AddPlace';
import AllPlaces from './src/screens/AllPlaces';

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor: Colors.primary500},
            headerTintColor:Colors.gray700,
            contentStyle:{backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton
                  name="plus"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} options={{
            title:'Add a new Place'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
