import React from 'react'
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native'
import {useTailwind} from 'tailwind-rn'
import Button from '../../partials/Button'
import Icon from '../../partials/Icon'

const Home = () => {
  const tailwind = useTailwind()

  const promos = [
    require('../../images/invite-friends.png'),
    require('../../images/paypal-credit.png'),
    require('../../images/shop-deals.png'),
  ]
  const sendAgain = [
    {uri: 'https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Maria Stewart'},
    {uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Jason Conary'},
    {uri: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Amy Smith'},
    {uri: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Eric Burnett'},
    {uri: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', name: 'Kyle Matthews'},
  ]
  const sendMoneyWorldwide = [
    {icon: 'library', name: 'Direct to bank'},
    {icon: 'credit-card', name: 'Debit card deposit'},
    {icon: 'cash', name: 'Cash pickup'},
    {icon: 'briefcase', name: 'Mobile money'},
  ]
  const recentActivity = [
    {icon: 'office-building', title: 'Trinity Church', type: 'donation', date: 'Mar 1', memo: 'Ukraine Relief', amount: '-$200'},
    {uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60', title: 'Jason Conary', type: 'Money sent', date: 'Feb 25', amount: '-$2,750'},
    {icon: 'office-building', title: 'A Medium Corporation', type: 'Automatic Payment', date: 'Feb 15', amount: '-$5'},
  ]

  return (
    <ScrollView style={tailwind('h-full bg-orange-50')}>

      <View style={tailwind('mt-6 mx-4 flex flex-row justify-between')}>
        <View style={tailwind('grow')}>
          <Image
            style={tailwind('rounded-full')}
            source={{uri: "https://headshots-inc.com/wp-content/uploads/2021/04/Website-Photo-18.png"}}
            width={36}
            height={36} />
        </View>
        <View style={tailwind('flex flex-row')}>
          <Button opacity={true} classes='bg-white rounded-full p-1 mr-1 flex justify-center items-center'>
            <Icon name="bookmark" color="darkblue" />
          </Button>
          <Button opacity={true} classes='bg-white rounded-full p-1 flex justify-center items-center'>
            <Icon name="qrcode" color="darkblue" />
          </Button>
        </View>
      </View>

      <View style={[styles.shadow, tailwind('mx-4 bg-white rounded-lg h-20 mt-8 flex flex-row items-center')]}>
        <View style={tailwind('rounded-full bg-orange-50 h-12 w-12 ml-4 flex justify-center items-center')}>
          <Icon name="paypal" />
        </View>
        <View style={tailwind('ml-4 grow')}>
          <Text style={tailwind('text-2xl')}>$0.00</Text>
          <Text style={tailwind('text-gray-700 text-sm')}>PayPal Balance</Text>
        </View>
        <View style={tailwind('pr-4')}>
          <Text style={tailwind('text-blue-600 font-bold')}>Add money</Text>
        </View>
      </View>

      <View style={tailwind('mt-4 bg-white h-40 ')}>
        <Text style={tailwind('my-4 ml-4 text-gray-800')}>Send again</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tailwind('ml-4 flex flex-row')}>
            {sendAgain.map(({uri, name}, idx) => (
              <View key={idx} style={tailwind('flex items-center mr-8')}>
                <Image key={idx} style={tailwind('rounded-full')} source={{uri}} width={50} height={50} />
                <Text style={tailwind('mt-2 text-center text-gray-700 text-sm leading-4 w-16')}>{name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={tailwind('mt-4')}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tailwind('ml-4 flex flex-row')}>
            {promos.map((src, idx) => (
              <Image
                style={tailwind('rounded-lg mr-2')}
                key={idx}
                source={src}
                width={300}
                height={180} />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={tailwind('mt-4 bg-white h-40')}>
        <Text style={tailwind('my-4 ml-4 text-gray-800')}>Send money worldwide</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={tailwind('ml-4 flex flex-row')}>
            {sendMoneyWorldwide.map(({icon, name}, idx) => (
              <View key={idx} style={tailwind('flex items-center mr-8')}>
                <View style={tailwind('p-3 bg-orange-50 flex justify-center items-center rounded-full')}>
                  <Icon name={icon} color="darkblue" />
                </View>
                <Text style={tailwind('mt-2 text-center text-gray-700 text-sm leading-4 w-14')}>{name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={[styles.shadow, tailwind('mx-4 bg-white rounded-lg h-20 mt-4 flex flex-row items-center')]}>
        <View style={tailwind('rounded-full bg-orange-50 h-12 w-12 ml-4 flex justify-center items-center')}>
          <Icon name="currency-dollar" />
        </View>
        <View style={tailwind('ml-4 grow')}>
          <Text style={tailwind('text-lg')}>Invite friends. Earn $10.</Text>
          <Text style={tailwind('text-gray-700 text-sm')}>Terms apply</Text>
        </View>
      </View>

      <View style={tailwind('my-4 bg-white pb-2')}>
        <Text style={tailwind('my-4 ml-4 text-gray-800')}>Recent activity</Text>
        <View style={tailwind('mx-4 flex')}>
          {recentActivity.map(({icon, uri, title, date, type, memo, amount}, idx) => (
            <View key={idx} style={tailwind('flex flex-row mb-4')}>
              <View>
                {uri && !icon && (
                    <Image key={idx} style={tailwind('rounded-full')} source={{uri}} width={40} height={40} />
                )}
                {icon && !uri && (
                  <View style={tailwind('p-2 bg-blue-100 flex justify-center items-center rounded-full')}>
                    <Icon name={icon} />
                  </View>
                )}
              </View>
              <View style={tailwind('ml-4 grow flex')}>
                <Text>{title}</Text>
                <Text style={tailwind('mt-1 text-xs text-gray-700')}>{date} · {type}</Text>
                {memo && <Text style={tailwind('mt-1 text-xs text-gray-700')}>"{memo}"</Text>}
              </View>
              <Text>{amount}</Text>
            </View>
          ))}
          <View style={tailwind('my-2 flex flex-row justify-center')}>
            <Text style={tailwind('text-blue-700 font-bold')}>Show all</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2
  },
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

export default Home
