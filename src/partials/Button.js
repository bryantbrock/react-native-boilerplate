import React from 'react'
import get from 'lodash/get'
import {useTailwind} from 'tailwind-rn'
import {TouchableHighlight, TouchableOpacity} from 'react-native'

const opts = {
  primary: 'px-8 py-2 rounded bg-blue-800 text-white',
  secondary: 'px-8 py-2 rounded border border-blue-800 text-blue-800',
}

const Button = ({
  children,
  classes = '',
  type = '',
  opacity = false,
  onPress = () => {},
}) => {
  const tailwind = useTailwind()
  const styles = tailwind(
    [get(opts, [type], ''), classes]
      .filter(Boolean)
      .join(' ')
  )

  const Component = opacity
    ? TouchableOpacity
    : TouchableHighlight

  return (
    <Component style={styles} onPress={onPress}>
      {children}
    </Component>
  )
}

export default Button