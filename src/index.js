import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import {TailwindProvider} from 'tailwind-rn'
import utilities from './css/tailwind.json'
import {useTailwind} from 'tailwind-rn'
import Button from './partials/Button'
import Icon from './partials/Icon'
import Home from './app/home'
import Payments from './app/payments'

const Tab = createBottomTabNavigator();

const tabs = [
  {name: 'home', icon: 'template', component: Home},
  {name: 'finances', icon: 'chart-bar', component: Home},
  {name: 'payments', icon: 'currency-dollar', component: Payments},
  {name: 'deals', icon: 'tag', component: Home},
  {name: 'personal', icon: 'collection', component: Home},
]

const TopBackground = () => {
  const tailwind = useTailwind()

  return <View style={tailwind('top-0 h-10 bg-orange-50')} />
}

const TabBar = ({state, navigation}) => {
  const tailwind = useTailwind()
  const isHome = state.index === 0
  const style = isHome
    ? tailwind('h-36 bg-white flex')
    : tailwind('h-24 bg-white flex')

  return (
    <View style={[styles.topShadow, style]}>
      {isHome && (
        <View style={tailwind('flex flex-row mx-3 mt-3 justify-around')}>
          <Button classes='w-44 py-1 rounded-2xl bg-blue-800 flex justify-center items-center'>
            <Text style={tailwind('text-white text-lg font-bold')}>Send</Text>
          </Button>
          <Button classes='w-44 py-1 rounded-2xl bg-blue-800 flex justify-center items-center'>
            <Text style={tailwind('text-white text-lg font-bold')}>Request</Text>
          </Button>
        </View>
      )}
      <View style={tailwind('mt-12 flex flex-row justify-between mx-7 mt-6')}>
        {state.routes.map((route, idx) => {
          const isFocused = state.index === idx
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          return (
            <Button key={idx} opacity={true} onPress={onPress} >
              <View style={tailwind('flex justify-center items-center p-1')}>
                <Icon name={route.params.icon} color={isFocused ? 'blue' : 'darkblue'} />
              </View>
            </Button>
          )
        })}
      </View>
    </View>
  )
}

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <TopBackground />
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <TabBar {...props} />} screenOptions={{animationEnabled: false}}>
          {tabs.map(({name, icon, component}, idx) => (
            <Tab.Screen
              key={idx}
              name={name}
              options={{
                headerShown: false,
                animationEnabled: false,
              }}
              initialParams={{icon}}
              component={component} />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  )
}

const styles = StyleSheet.create({
  topShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.44,
    shadowRadius: 20.32,

    elevation: 16,
  }
})

export default App
