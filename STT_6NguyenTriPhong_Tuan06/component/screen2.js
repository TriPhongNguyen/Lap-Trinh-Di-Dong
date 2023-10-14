import react from "react";
import * as React from "react";
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
  { MaMau: "#C5F1FB", img: require("./../assets/img/vs_blue.png") },
  { MaMau: "#F30D0D", img: require("./../assets/img/vs_red.png") },
  { MaMau: "#000000", img: require("./../assets/img/vs_black.png") },
  { MaMau: "#234896", img: require("./../assets/img/vs_silver.png") },
];

const screen2 = ({ navigation, route }) => {
  const [Mau, setMau] = react.useState(null);
  const [anh, setanh] = react.useState(require("./../assets/img/vs_blue.png"));
  const getMau = (Mau) => {
    setMau(Mau);
  };
  const getAnh = (anh) => {
    setanh(anh);
  };
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
              getMau(color.MaMau);
              getAnh(color.img);
            }}
          >
            <Square key={index} color={color.MaMau} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.buttonXong} onPress={()=>{
            navigation.navigate({
                name:'Home',
                params:{anhdt: anh},
                merge: true,
            })
        }}>
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
