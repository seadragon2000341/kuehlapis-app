import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import { FlatList } from "react-native-gesture-handler";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 0, blue: 0, id: "0" },
    { red: 25, green: 0, blue: 0, id: "1" },
    { red: 255, green: 255, blue: 0, id: "2" },
  ]);

  function renderItem({ item }) {
    return <BlockRGB red={item.red} blue={item.blue} green={item.green} />;
  }
  function addColor() {
    setColorArray([
      ...colorArray,
      {
        red: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
        green: Mhath.floor(Math.random() * 256),
        id: `${colorArray.length}`
      }
    ])
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{height:40, justifyContent: 'center'}} onPress={addColor}><Text>Add Color</Text></TouchableOpacity>
      <FlatList style={styles.list} data={colorArray} renderItem={renderItem} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});