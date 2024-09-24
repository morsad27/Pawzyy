import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='home'
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
        }}/>
        <Tabs.Screen name='favorite'options={{
            title: 'Favorite',
            headerShown: false,
            tabBarIcon:({color})=><Fontisto name="favorite" size={24} color={color} />
        }}/>
        <Tabs.Screen name='inbox'options={{
            title: 'Inbox',
            headerShown: false,
            tabBarIcon:({color})=><Ionicons name="chatbox-ellipses" size={24} color={color} />
        }}/>
        <Tabs.Screen name='profile'options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon:({color})=><Ionicons name="person" size={24} color={color} />
        }}/>
    </Tabs>
  )
}