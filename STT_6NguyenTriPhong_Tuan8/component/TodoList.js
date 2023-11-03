import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-web";

const url = "https://6544da715a0b4b04436d195d.mockapi.io/joblist";

export default function todoList({navigation}) {
  var [list, setlist] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setlist(json);
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Pressable>
            <Text>{"<--"}</Text>
          </Pressable>
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            {" "}
            HELLO PHONG
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              borderColor: "#9095A0",
              borderWidth: "1px",
              borderRadius: "5px",
              width: "334px",
              height: "43px",
              marginTop: "50px",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: "10px",
            }}
          >
            <Image
              style={{ width: "20px", height: "20px", resizeMode: "contain" }}
              source={require("./../assets/img/Frame.png")}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#BCC1CA"
              style={{ width: "300px", height: "43px" }}
            ></TextInput>
          </View>
        </View>
        <View style={{alignItems:'center'}}>
          <FlatList
            style={{}}
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: "#DEE1E678",
                    borderRadius: "24px",
                    width: "335px",
                    height: "48px",
                    marginVertical: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: "24px", height: 24 }}
                      source={require("./../assets/img/Frame1.png")}
                    />
                    <Text style={{ fontSize: 16, fontWeight: 700 }}>
                      {item.Namejob}
                    </Text>
                  </View>
                  <Pressable >
                    <Image
                      style={{ width: "24px", height: 24 }}
                      source={require("./../assets/img/Frame2.png")}
                    />
                  </Pressable>
                </View>
              );
            }}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Pressable onPress={()=>{
                    navigation.navigate('Addjob')
                  }}>
            <Image
              style={{ width: "69px", height: 69 }}
              source={require("./../assets/img/Group 13.png")}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
