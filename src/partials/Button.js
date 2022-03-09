import React from 'react'
import get from 'lodash/get'
import {View} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import {TouchableHighlight} from 'react-native'

const opts = {
  primary: 'px-8 py-2 rounded bg-blue-800 text-white',
  secondary: 'px-8 py-2 rounded border border-blue-800 text-blue-800',
}

const Button = ({children, style = {}, type = 'primary', onPress = () => {}}) => {
  const tailwind = useTailwind()
  const classes = get(opts, [type], '')
  const styles = {...tailwind(classes), ...style}

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles}>{children}</View>
    </TouchableHighlight>
  )
}

export default Button