import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { TouchableOpacity } from "react-native-web";

var arr=[{
    name:'Ca nau mi,nau lau',
    shop:'Devang',
    img:require('./../assets/img/ca_nau_lau.png')
},
{
    name:'Ca nau mi,nau lau',
    shop:'Devang',
    img:require('./../assets/img/ca_nau_lau.png')
},
{
    name:'Ca nau mi,nau lau',
    shop:'Devang',
    img:require('./../assets/img/ca_nau_lau.png')
},
{
    name:'Ca nau mi,nau lau',
    shop:'Devang',
    img:require('./../assets/img/ca_nau_lau.png')
},
{
    name:'Ca nau mi,nau lau',
    shop:'Devang',
    img:require('./../assets/img/ca_nau_lau.png')
},
]

export default function Giohang({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={()=>{navigation.navigate('shop')}}><Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/ant-design_arrow-left-outlined.png")}
        /></Pressable>
        
        <Text style={{ fontSize: "20px", color: "white" }}>Chat</Text>
        <TouchableOpacity > <Image
          style={{ width: "24px", height: "24px" }}
          source={require("./../assets/img/bi_cart-check.png")}
        /></TouchableOpacity>
       
      </View>
      <View style={styles.body}>
        <View style={{borderBottomColor:'#C4C4C4', borderBottomWidth:'1px'}}>
          {" "}
          <Text style={{ padding: "30px" }}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>
        {arr.map((item)=>
            <View style={{borderBottomColor:'#C4C4C4', borderBottomWidth:'1px', flexDirection:"row",justifyContent:'space-around'}}>
            <Image style={{width:'74px',height:'74px'}} source={item.img}></Image>
            <Text>{item.name} {"\n"}<Text>Shop :{item.shop}</Text></Text>
            
            <Pressable style={{ width:'88px',height:'33px',backgroundColor:'red', justifyContent:'center',alignItems:'center'}}><Text>Chat</Text></Pressable>
          </View>
        )}
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
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
