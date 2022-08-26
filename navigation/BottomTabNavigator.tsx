import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen.tsx";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootTabParamList, HomeParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Coming_Soon"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ headerTitle: "" }}
      />
    </HomeStack.Navigator>
  );
}
