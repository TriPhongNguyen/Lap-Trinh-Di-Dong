import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";
var arr = [
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "mountain",
    discout:'15%-$350',
    discription:'It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.'
  },
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "mountain",
    discout:'15%-$350',
    discription:'abcabc'
  },
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "mountain",
    discout:'15%-$350',
    discription:'abcabc'
  },
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "mountain",
    discout:'15%-$350',
    discription:'abcabc'
  },
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "mountain",
    discout:'15%-$350',
    discription:'abcabc'
  },
  {
    name: "Pinarello",
    price: "$1800",
    img: require("./../assets/img/bione-removebg-preview.png"),
    type: "roadbike",
    discout:'15%-$350',
    discription:'abcabc'
  },
];

export default function listScreen({ navigation, route }) {
  var [list, setlist] = react.useState(arr);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "25px", fontWeight: 700, color: "#E94141" }}>
        The worlds Best Bike
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            borderWidth: "1px",
            borderColor: "#E9414187",
            justifyContent: "center",
            alignItems: "center",
            width: 99,
            height: 32,
          }}
          onPress={() => {
            var newArr = arr;
            setlist(newArr);
          }}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: "1px",
            borderColor: "#E9414187",
            justifyContent: "center",
            alignItems: "center",
            width: 99,
            height: 32,
          }}
          onPress={() => {
            var newArr = arr.filter((item) => {
              return item.type == "roadbike";
            });
            setlist(newArr);
          }}
        >
          <Text>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: "1px",
            borderColor: "#E9414187",
            justifyContent: "center",
            alignItems: "center",
            width: 99,
            height: 32,
          }}
          onPress={() => {
            var newArr = arr.filter((item) => {
              return item.type == "mountain";
            });
            setlist(newArr);
          }}
        >
          <Text>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {list.map((item) => {
          return (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 160,
                height: 200,
                backgroundColor: "#F7BA8326",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
              onPress={()=>{navigation.navigate('Detail',item)
              
              }}
            >
              <Image
                style={{ width: 135, height: 127, resizeMode: "contain" }}
                source={item.img}
              />
              <Text style={{ fontSize: 20, fontWeight: 400 }}>{item.name}</Text>
              <Text style={{ fontSize: 20, fontWeight: 400 }}>
                {item.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
