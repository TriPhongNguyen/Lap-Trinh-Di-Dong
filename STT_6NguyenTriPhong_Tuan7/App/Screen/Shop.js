import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { TextInput } from "react-native-web";
var arr = [
  {
    name: "Ca nau mi,nau lau",
    shop: "Devang",
    img: require("./../assets/img/ca_nau_lau.png"),
  },
  {
    name: "Ca nau mi,nau lau",
    shop: "Devang",
    img: require("./../assets/img/ca_nau_lau.png"),
  },
  {
    name: "Ca nau mi,nau lau",
    shop: "Devang",
    img: require("./../assets/img/ca_nau_lau.png"),
  },
  {
    name: "Ca nau mi,nau lau",
    shop: "Devang",
    img: require("./../assets/img/ca_nau_lau.png"),
  },
  {
    name: "Ca nau mi,nau lau",
    shop: "Devang",
    img: require("./../assets/img/ca_nau_lau.png"),
  },
];

export default function Shop({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/ant-design_arrow-left-outlined.png")}
        />
          <View style={{backgroundColor:'white', height:'30px', flexDirection:'row',alignItems:'center'}}><Image style={{width: "24px", height: "24px"}} source={require('./../assets/img/whh_magnifier.png')}/>
        <TextInput style={{backgroundColor:'white', height:'30px'}}></TextInput></View>
        
        
        <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/bi_cart-check.png")}
        />
        <Image
          style={{ width: "18px", height: "4px" }}
          source={require("./../assets/img/Group 2.png")}
        />
      </View>
      <View style={styles.body}>

        {arr.map((item) => (
          <View
            style={{
        
              width:'150px',
              height:'200px'
            }}
          >
            <Image
              style={{ width: "74px", height: "74px" }}
              source={item.img}
            ></Image>
            <Text>
              {item.name} {"\n"}
              <Text>Shop :{item.shop}</Text>
            </Text>

            <Pressable
              style={{
                width: "88px",
                height: "33px",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Chat</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/Group 10.png")}
        />
        <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/Vector (Stroke).png")}
        />

        <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/Vector 1 (Stroke).png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    alignItems: "center",
    justifyContent: "space-around",
  },
  body: {
    flex: 8,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around'
    
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
