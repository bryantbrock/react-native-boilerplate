import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {TailwindProvider} from 'tailwind-rn'
import utilities from './css/tailwind.json'
import Home from './app/home'
import Settings from './app/settings'

const Stack = createNativeStackNavigator()

const screens = [
  {name: 'Home', component: Home},
  {name: 'Settings', component: Settings},
]

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator>
          {screens.map(({name, component}, idx) => (
            <Stack.Screen
              key={idx}
              name={name}
              component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}

export default App
