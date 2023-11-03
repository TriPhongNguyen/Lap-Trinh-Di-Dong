import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function StartScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#8353E2" }}>
        MANAGE YOUR
      </Text>
      <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#8353E2" }}>
        TASK
      </Text>
      <View
        style={{
          borderColor: "#9095A0",
          borderWidth: "1px",
          borderRadius: "12px",
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
          placeholder="Enter your name"
          placeholderTextColor="#BCC1CA"
          style={{ width: "300px", height: "43px" }}
        ></TextInput>
      </View>
      <Pressable
      onPress={()=>{
          navigation.navigate('Todolist')
      }}
        style={{
          width: "190px",
          height: "44px",
          backgroundColor: "#00BDD6",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          marginTop: "50px",
        }}
      >
        <Text style={{ fontSize: "16px", color: "white" }}>
          GET STARTED {"-->"}
        </Text>
      </Pressable>
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
