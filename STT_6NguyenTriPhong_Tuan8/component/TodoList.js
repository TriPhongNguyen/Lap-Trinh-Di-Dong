import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function todoList() {
  async function LogTodo() {
    const response = await fetch("https://6544660b5a0b4b04436c5204.mockapi.io/Job",{
     
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Job),
      
    });
    const movies = await response.json();
    console.log(movies);
  }
  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:'row', justifyContent:'space-between', alignItems:'center'
        
      }}>
        <Pressable><Text>{'<--'}</Text></Pressable>
        <Text style={{fontSize:'20px',fontWeight:'bold'}}> HELLO PHONG</Text>
      </View> 
      <View style={{justifyContent:'center',alignItems:'center'}}>
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
      <Pressable 
      onPress={()=>{
       LogTodo()
      }}>
        <Text>api</Text>
      </Pressable>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },
});
