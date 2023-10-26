import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function detail({ navigation, route }) {
  var item = route.params;

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#E941411A",
          width: 359,
          height: 388,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 297, height: 340, resizeMode: "contain" }}
          source={item.img}
        />
      </View>
      <Text style={{ fontSize: 35, fontWeight: 400 }}>{item.name}</Text>
      <Text style={{ fontSize: 25, fontWeight: 400 }}>
        {item.discout} {item.price}
      </Text>
      <Text style={{ fontSize: 25, fontWeight: 400 }}>Description</Text>
      <Text>{item.discription}</Text>
      <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
        <Image
          style={{ width: 35, height: 35, resizeMode: "contain" }}
          source={require("./../assets/img/akar-icons_heart.png")}
        />
        <TouchableOpacity style={{width: 269,
          height: 54,
          borderRadius: 30,
          backgroundColor: "#E94141",
          justifyContent: "center",
          alignItems: "center",}}><Text style={{ fontSize: 25, fontWeight: 400 }}>Add to card</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    backgroundColor: "#fff",
    margin: "20px",

  },
});
