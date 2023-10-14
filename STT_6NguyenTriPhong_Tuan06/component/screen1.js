import * as React from "react";
import react from "react";
import {
  View,
  Text,
  Image,
  Button,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
const anhdau=require("./../assets/img/vs_blue.png");


const screen1 = ({ navigation, route }) => {
  react.useEffect(() => {
    if (route.params?.anhdt) {
        
    }
  },[route.params?.anhdt]);
  return (
    <View style={styles.container}>
      <View style={styles.phone}>
        <Image
          source={route.params?.anhdt||anhdau}
          style={styles.imgage}
        ></Image>
        <Text>ĐIỆN THOẠI VSMART - JOY4- HÀNG CHÍNH HÃNG</Text>
      </View>

      <View style={styles.ratingview}>
        <Image
          source={require("./../assets/img/star_filled.png")}
          style={styles.star}
        ></Image>
        <Image
          source={require("./../assets/img/star_filled.png")}
          style={styles.star}
        ></Image>
        <Image
          source={require("./../assets/img/star_filled.png")}
          style={styles.star}
        ></Image>
        <Image
          source={require("./../assets/img/star_filled.png")}
          style={styles.star}
        ></Image>
        <Image
          source={require("./../assets/img/star_filled.png")}
          style={styles.star}
        ></Image>
        
        <Text style={{ fontSize: 20, marginTop: "7px" }}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View style={styles.ratingview}>
        <Text style={{ fontWeight: "bold", fontSize: "40px" }}>1.790.000</Text>
        <Text style={{ fontSize: "20px", margin: "15px" }}>
          <del>1.790.000</del>
        </Text>
      </View>
      <View style={styles.ratingview}>
        <Text style={{ fontWeight: "bold", fontSize: "15px", color: "red" }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("./../assets/img/icon.PNG")}
          style={{ width: "20px", height: "20px", marginLeft: "20px" }}
        ></Image>
      </View>
      <TouchableOpacity style={styles.button}  onPress={()=>
        navigation.navigate('ColorChose')
      }>
        <Text style={styles.textMau}>4-MÀU CHỌN MÀU</Text>
        <Text style={styles.textMau}>{">"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonmua}>
        <Text style={{ fontSize: "25px", color: "white", fontWeight: "bold" }}>
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: "1",
    padding: "20px",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  phone: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgage: {
    width: "341px",
    height: '306px',
    resizeMode:'contain'
  },
  star: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  ratingview: {
    marginTop: "10px",
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    borderRadius: "10px",
    marginTop: "10px",
    backgroundColor: "white",
    borderColor: "black",
    width: 350,
    height: "50px",
    borderWidth: "1px",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textMau: {
    fontSize: "20px",
  },
  buttonmua: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    backgroundColor: "red",
    justifyContent: "flex-end",
    borderRadius: "10px",
    width:'350px'
  },
});

export default screen1;
