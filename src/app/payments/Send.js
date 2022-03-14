import React, {useState} from 'react'
import {View, Text, Image, ScrollView, TextInput} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import Icon from '../../partials/Icon'

const Send = () => {
  const [search, setSearch] = useState('')
  const tailwind = useTailwind()

  const contacts = [
    {uri: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Maria Stewart'},
    {uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Jason Conary'},
    {uri: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Amy Smith'},
    {uri: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Eric Burnett'},
    {uri: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Kyle Matthews'},
  ]
  const moreWaysToSend = [
    {icon: 'library', name: 'Direct to bank'},
    {icon: 'cash', name: 'Cash pickup'},
    {icon: 'device-mobile', name: 'Reload phone'},
    {icon: 'briefcase', name: 'Other wallets'},
  ]

  return (
    <ScrollView style={tailwind('h-full bg-orange-50')}>
        <View style={tailwind('pt-4 bg-white')}>
          <Text style={tailwind('my-4 ml-4 text-gray-800')}>Send to someone new</Text>
          <View style={tailwind('flex flex-row items-center mx-4')}>
            <View style={tailwind('rounded-2xl border border-gray-400 flex flex-row px-3 py-2 mr-2 grow')}>
              <Icon name='search' height='18' width='18' />
              <TextInput
                value={search}
                onChangeText={setSearch}
                style={tailwind('ml-2')}
                placeholder='Name, @username, email, mobile' />
            </View>
            <Icon name='view-grid-add' color='darkblue' />
          </View>
          <View style={tailwind('mx-6 mt-5')}>
            <View style={tailwind('ml-4 flex flex-row flex-wrap')}>
              {contacts.map(({uri, name}, idx) => (
                <View key={idx} style={tailwind('flex items-center mr-10 mb-4')}>
                  <Image key={idx} style={tailwind('rounded-full')} source={{uri}} width={50} height={50} />
                  <Text style={tailwind('mt-2 text-center text-gray-700 text-sm leading-4 w-16')}>{name}</Text>
                </View>
              ))}
            </View>
            <View style={tailwind('my-2 flex flex-row justify-center')}>
              <Text style={tailwind('text-blue-700 font-bold')}>All contacts</Text>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-2 pb-2 bg-white')}>
          <Text style={tailwind('my-4 ml-4 text-gray-800')}>More ways to send</Text>
          <View style={tailwind('mx-6')}>
            <View style={tailwind('ml-4 flex flex-row flex-wrap')}>
              {moreWaysToSend.map(({icon, name}, idx) => (
                <View key={idx} style={tailwind('flex items-center mr-6 mb-4')}>
                  <View style={tailwind('p-3 bg-orange-50 flex justify-center items-center rounded-full')}>
                    <Icon name={icon} color="darkblue" />
                  </View>
                  <Text style={tailwind('mt-2 text-center text-gray-700 text-sm leading-4 w-20')}>{name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
  )
}

export default Send