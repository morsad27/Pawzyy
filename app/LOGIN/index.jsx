import { View, Text, Pressable } from 'react-native'
import React, {useCallback} from 'react'
import { Image } from 'react-native'
import Colors from './../.././constants/Colors'
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'

  
export const useWarmUpBrowser = () => {
  React.useEffect(()  => {

    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {

  useWarmUpBrowser()

const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

const onPress = useCallback(async () => {
  try {
    const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
    redirectUrl: Linking.createURL('/(tabs)/home', {scheme: 'myapp'}),
  })
    if (createdSessionId) {
      // User was created, and a session was created.
      // You can now use the `signIn` or `signUp` functions to authenticate the user.
      // You can also use the `setActive` function to set the active session.
    } else {
      // User was signed in. You can now use the `signIn` function to authenticate the user.
      // You can also use the `setActive` function to set the active session.
    }
  } catch (err) {
    console.error('OAuth Error: ', err)
  }
}, [])

  return (
    <View style={{
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Image source={require('./../../assets/images/temploginscreen.png')}
      style={{
        width: '100%',
        height: 500
        
      }}/>
      <View style={{
        padding: 20,
        display: 'flex',
        alignItems:'center'
      }}>
        <Text style={{
          fontFamily:'Semibold',
          fontSize: 30,
          textAlign: 'center'
        
        }}
        >Ready to make a new friend?</Text>

        <Pressable
        onPress= {onPress}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 14,
          borderRadius: 14,
          marginTop: 100,
          width: '100%'
        }}>
          <Text style={{
  
            fontFamily: 'Regular',
            fontSize: 20,
            textAlign: 'center'
          }}>
            Get Started
          </Text>
        </Pressable>
      </View>
      
    </View>
        

  )
}