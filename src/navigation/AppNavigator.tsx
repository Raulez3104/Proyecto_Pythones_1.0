import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PanelScreen from "../screens/Panel";
import AjustesScreen from "../screens/Ajustes";
import ReportesScreen from "../screens/Reportes";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Panel"
      screenOptions={{
        tabBarActiveTintColor: "#00008B",
      }}
    >
      <Tab.Screen
        name="Panel"
        component={PanelScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Reportes"
        component={ReportesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-chart"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Ajustes"
        component={AjustesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
