import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {useTailwind} from 'tailwind-rn'
import Request from './Request'
import Bills from './Bills'
import Send from './Send'
import Give from './Give'

const Tab = createMaterialTopTabNavigator()

const tabs = [
  {name: 'Send', component: Send},
  {name: 'Bills', component: Bills},
  {name: 'Give', component: Give},
  {name: 'Request', component: Request},
]

const TabBar = ({state, navigation}) => {
  const tailwind = useTailwind()

  return (
    <View style={tailwind('bg-orange-50')}>
      <View style={tailwind('mt-10 flex flex-row justify-center')}>
        <Text>Payments</Text>
      </View>
      <View style={tailwind('mt-3 mb-1 mx-4 rounded-2xl bg-gray-400/10')}>
        <View style={tailwind('m-0.5 flex flex-row justify-between')}>
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

            const containerStyle = isFocused
              ? tailwind('flex flex-row justify-center grow rounded-2xl px-3 py-2 bg-white')
              : tailwind('flex flex-row justify-center grow rounded-2xl px-3 py-2')
            const textStyle = isFocused
              ? tailwind('text-xs text-blue-900 font-bold')
              : tailwind('text-xs')

            return (
              <TouchableOpacity style={containerStyle} onPress={onPress}>
                <Text style={textStyle}>{route.name}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </View>
  )
}

const Payments = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      {tabs.map(({name, component}, idx) => (
        <Tab.Screen
          key={idx}
          name={name}
          options={{headerShown: false}}
          component={component} />
      ))}
    </Tab.Navigator>
  )
}

export default Payments
