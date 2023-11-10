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

export default function addJob({ navigation,route }) {
  var [list, setlist] = useState([]);
  var [job, setjob] = useState("");
  var [count,setcount]=useState(1)

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row-reverse",
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
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>ADD YOUR JOB</Text>
          <Pressable style={{ justifyContent: "center", borderWidth: 1 }}>
            <Image
              style={{ width: 24, height: 24, position: "absolute" }}
              source={require("./../assets/img/Frame.png")}
            />
            <TextInput
              placeholder="Input your job"
              style={{ width: 334, height: 44, marginLeft: 24 }}
              onChangeText={text => setjob(text)}
            ></TextInput>
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
         
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                Namejob: job,
              }),
              headers: {
                Accept: "application/json",
                "Content-type": "application/json; charset=UTF-8",
              },
            })
            setcount(count=>count+1)
            navigation.navigate("Todolist",{count: job});
          }}
          style={{
            justifyContent: "center",
            borderRadius: 15,
            backgroundColor: "#00BDD6",
            width: "199px",
            height: 44,
            alignItems: "center",
          }}
        >
          <Text>Finish{"->"}</Text>
        </Pressable>
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
