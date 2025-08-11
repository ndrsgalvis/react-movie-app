import { Stack } from "expo-router";
import './globals.css'
import {App} from "expo-router/build/rsc/entry";
import {StatusBar} from "react-native";

export default function RootLayout() {
  return <>
      <StatusBar hidden={true} />
      <Stack >
          <Stack.Screen
            name="(tabs)"
            options={{headerShown: false}}/>

          <Stack.Screen
            name="movies/[id]"
            options={{headerShown: false}}/>
       </Stack >
  </>;
}
