import React from "react";
import Home from "./src/screens/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";
import { useFonts, JosefinSans_400Regular, JosefinSans_500Medium } from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";



export default function App() {
  const Stack = createNativeStackNavigator();


  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular, 
    JosefinSans_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }


  return( 
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
   <Stack.Screen name="Home" options={{
     headerShown: false,
   }}>
   {(props)=> <Home{...props} channelName=
   {"webdeveloper"} />}
   </Stack.Screen>
   <Stack.Screen name="Course" component={Course}  options={{
    headerTitleStyle:  {
      fontSize: 25,
      fontFamily: "Nunito_700Bold",

    },
    headerTitle: "Courses",
    headerTitleAlign: "center",

   }}/>
   <Stack.Screen name="Student" component={UserData}  options={{
    headerTitleStyle:  {
      fontSize: 25,
      fontFamily: "Nunito_700Bold",

    },
    headerTitle: "Students Data",
    headerTitleAlign: "center",

   }}/>
   <Stack.Screen name="About" component={About}  options={{
    headerTitleStyle:  {
      fontSize: 25,
      fontFamily: "Nunito_700Bold",

    },
    headerTitleAlign: "center",

   }}/>
   <Stack.Screen name="Contact" component={Contact}  options={{
    headerTitleStyle:  {
      fontSize: 25,
      fontFamily: "Nunito_700Bold",

    },
    headerTitleAlign: "center",

   }}/>
   <Stack.Screen name="CourseDetails" component={CourseDetails}  options={{
    headerTitleStyle:  {
      fontSize: 25,
      fontFamily: "Nunito_700Bold",

    },
    headerTitleAlign: "center",

   }}/>

  </Stack.Navigator>
  </NavigationContainer>
  )
};
