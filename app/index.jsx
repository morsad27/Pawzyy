import { Pressable, Text, View } from "react-native";
import { Link, Redirect, useRootNavigationState } from "expo-router"
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-expo" 

export default function Index() {

  const { user } = useUser();

  const rootNavigationState=useRootNavigationState()

  useEffect(() => {
    CheckNavLoaded();
    // Check user status and navigate to the appropriate screen
  }, [])

  const CheckNavLoaded=()=>{
    if(!rootNavigationState.key)
      return null;
  }


  return user && (
    <View
      style={{
        flex: 1
      }}
    >
      {user? 
      <Redirect href={'/(tabs)/home'}>Home</Redirect> 
     : <Redirect href={'/login/index'}>Login</Redirect> }
    </View>
  );
}
