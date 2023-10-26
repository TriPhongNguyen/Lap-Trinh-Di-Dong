import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function startScreen() {
    var navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "26px" , fontWeight:400,}}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View
        style={{
          width: "359px",
          height: "388px",
          backgroundColor: "#E941411A",
          borderRadius: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./../assets/img/bifour_-removebg-preview.png")}
          style={{ width: "292px", height: "270px" }}
        />
      </View>
      <Text style={{ fontSize: "26px", fontWeight: 700 }}>POWER BIKE SHOP</Text>
      <TouchableOpacity
        style={{
          width: 340,
          height: 61,
          borderRadius: 30,
          backgroundColor: "#E94141",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={()=>{
            navigation.navigate('List')
        }}
      >
        <Text style={{ fontWeight: 400, fontSize: 27 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
