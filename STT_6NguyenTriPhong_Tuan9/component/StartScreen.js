import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  
} from "react-native";


export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/img/02 1.png')}/>
      
      
      </View>

 

     )
     

    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    


  },
});
