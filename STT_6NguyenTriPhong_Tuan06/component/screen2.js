import react, { useState } from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const colorSquare = [
  {
    MaMau: "#C5F1FB",
    img: require("./../assets/img/vs_blue.png"),
    styles: { width: "50px", height: "50px", bgcl: "blue" },
  },
  {
    MaMau: "#F30D0D",
    img: require("./../assets/img/vs_red.png"),
    styles: { width: "50px", height: "50px", bgcl: "F30D0D" },
  },
  {
    MaMau: "#000000",
    img: require("./../assets/img/vs_black.png"),
    styles: { width: "300px", height: "300px", bgcl: "black" },
  },
  {
    MaMau: "#234896",
    img: require("./../assets/img/vs_silver.png"),
    styles: { width: "50px", height: "50px", bgcl: "silver" },
  },
];

const screen2 = ({ navigation, route }) => {
  const [Mau, setMau] = react.useState(null);
  const [anh, setanh] = react.useState(require("./../assets/img/vs_blue.png"));

  const handleColorSquarePress = (color) => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={anh} />
        <Text style={styles.namePhone}>
          ĐIỆN THOẠI VSMART - JOY4- HÀNG CHÍNH HÃNG
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={{ fontSize: "20px", padding: "20px", marginRight: 100 }}>
          {" "}
          Hãy chọn màu bên dưới
        </Text>
        {colorSquare.map((color, index) => (
          <TouchableOpacity
            style={styles.colorChose}
            onPress={() => {
              navigation.navigate("Home", {
                anhdt: color.img,
                bgcl: color.styles.bgcl,
                width:color.styles.width,
                height:color.styles.height,
              });
            }}
          >
            <Square key={index} color={color.MaMau} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.buttonXong} onPress={() => {}}>
          <Text
            style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}
          >
            Xong
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: "4",
    backgroundColor: "#fff",
  },
  header: {
    flex: "1",
    flexDirection: "row",
    padding: 20,
  },
  body: {
    display: "flex",
    flex: "3",
    backgroundColor: "#C4C4C4",
    alignItems: "center",
  },
  image: {
    width: "132px",
    height: null,
    resizeMode: "contain",
  },
  namePhone: {
    fontSize: "20px",
    margin: "10px",
  },
  colorChose: {},
  buttonXong: {
    borderRadius: 5,
    width: 350,
    height: "auto",
    backgroundColor: "blue",
    alignItems: "center",
    marginTop: 25,
  },
});
const Square = ({ color }) => (
  <View
    style={{
      width: 70,
      height: 70,
      backgroundColor: color,
      marginTop: "15px",
    }}
  />
);
export default screen2;
