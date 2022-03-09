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
      <Text style={tailwind('text-blue-800 text-xl')}>Settings!</Text>
      <HeroIcon name="cog" />
      <Button onPress={goTo('Home')}>
        <Text>Go to Home</Text>
      </Button>
    </View>
  )
}

export default Home
