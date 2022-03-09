import React from 'react'
import {View, Text} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import Button from '../../partials/Button'
import HeroIcon from '../../partials/HeroIcon'

const Home = ({navigation}) => {
  const tailwind = useTailwind()
  const goTo = (screen, opts = {}) => () => navigation.navigate(screen, opts)

  return (
    <View style={tailwind('flex justify-center items-center')}>
      <Text style={tailwind('text-blue-800 text-xl')}>Home!</Text>
      <HeroIcon name="home" />
      <Button onPress={goTo('Settings')}>
        <Text>Go to Settings</Text>
      </Button>
    </View>
  )
}

export default Home
