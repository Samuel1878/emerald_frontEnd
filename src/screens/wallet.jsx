import { TouchableOpacity, View ,Text,Image, TextInput, FlatList} from "react-native";
import styles, { app_1, app_3, app_4, bg_3, bg_4, text_1, text_1b } from "../libs/style";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LottieView from "lottie-react-native";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import { Entypo } from "@expo/vector-icons";
import {SliderBox} from "react-native-image-slider-box"
import { IMAGES } from "../libs/data";





const Wallet = ()=>{ 
  const {money,navigation,payments} = useContext(GlobalContext);
  const [data,setData]= useState([]);
  const [opened, setOpened] = useState(false);
  const kbzPay = require("../../assets/kbzPay.png");
  const ayaPay = require("../../assets/ayaPay.jpeg");
  const cbPay = require("../../assets/cb.png");
  const wavePay = require("../../assets/wavePay.png");
const DATA = [{
  method:"kbzPay",
  name:"Mr/Ms....",
  phone:"096..."
},
{
  method:"wavePay",
  name:"Mr/Ms....",
  phone:"097..."
},{
  method:"cbPay",
  name:"Mr/Ms....",
  phone:"092..."
},
{
  method:"ayaPay",
  name:"Mr/Ms....",
  phone:"098..."
}
]
    const scanFunc = ()=>{

    }
    const RenderPayments = ({item}) =>{

      const RenderImg= ()=>{
        let img ;
        switch (item.method) {
          case "kbzPay":
            img = kbzPay
            break;
          case "wavePay":
            img = wavePay
            break
          case "ayaPay":
            img = ayaPay
            break;
          default:
            img = cbPay
            break;
        }
        return(<Image style={styles.paymentImg} source={img}/>)
      }
      const EditPayment = () =>{
         switch (item.method) {
           case "kbzPay":
         navigation.navigate("kbzPay");
             break;
           case "wavePay":
               navigation.navigate("wavePay");
         
             break;
           case "ayaPay":
               navigation.navigate("ayaPay");
             
             break;
           default:
               navigation.navigate("cbPay");
       
             break;
         }
        
      }
      return (
        <View style={styles.payments}>
          <RenderImg />
          <View style={styles.payment}>
            <Text style={styles.paymentN}>{item?.name}</Text>
            <Text style={styles.paymentP}> {item?.phone}</Text>
          </View>
          <TouchableOpacity style={styles.paymentEd} onPress={EditPayment}>
            <Text style={styles.paymentEdTxt}>Edit</Text>
          </TouchableOpacity>
        </View>
      );

    }
        useEffect(()=>{
      if(payments.length <=0){
        setData(DATA);
        return
      }else{
        setData(payments)
      }
    },[payments])
    return (
      <View style={styles.wallet}>
        <View style={styles.walletMainCon}>
          <View style={styles.walletMain}>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              {/* <MaterialCommunityIcons
                name="line-scan"
                size={45}
                color={text_1b}
              /> */}
              <LottieView
                speed={1}
                autoPlay
                style={styles.scanLoti}
                source={require("../../assets/scan.json")}
              />

              <Text style={styles.walletBtnTxt}>Scan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              {/* <MaterialCommunityIcons name="qrcode" size={45} color={text_1b} /> */}
              <LottieView
                speed={1}
                autoPlay
                style={styles.scanLoti}
                source={require("../../assets/qrCode.json")}
              />
              <Text style={styles.walletBtnTxt}>Receive</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              {/* <MaterialCommunityIcons
                name="wallet-plus-outline"
                size={45}
                color={text_1b}
              /> */}
              <LottieView
                speed={1}
                autoPlay
                style={styles.scanLoti}
                source={require("../../assets/qrCode.json")}
              />

              <Text style={styles.walletBtnTxt}>Cash In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={scanFunc} style={styles.scanBtn}>
              {/* <AntDesign name="export" size={45} color={text_1b} /> */}
              <LottieView
                speed={1}
                autoPlay
                style={styles.scanLoti}
                source={require("../../assets/qrCode.json")}
              />
              <Text style={styles.walletBtnTxt}>Cash Out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ballanceCon}>
            <LottieView
              speed={0.5}
              autoPlay
              style={styles.walletImg}
              source={require("../../assets/dollar.json")}
            />
            <View>
              <Text style={styles.ballanceHeader}>Ballance (Ks) </Text>
              <Text style={styles.ballanceD}>
                {opened ? money : "**********"}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => (opened ? setOpened(false) : setOpened(true))}
              style={styles.eye}
            >
              <Entypo
                name={opened ? "eye-with-line" : "eye"}
                size={26}
                color={app_1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.walletBottomCon}>
          <View style={styles.walletBtnCon}>
            <TouchableOpacity
              style={styles.walletBtns}
              onPress={() => navigation.navigate("Transfer")}
            >
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/transfer.json")}
              />
              <Text style={styles.walletBtnsTxt}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.walletBtns}
              onPress={() => navigation.navigate("Transaction_History")}
            >
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/historyBlue.json")}
              />
              <Text style={styles.walletBtnsTxt}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Service")}
              style={styles.walletBtns}
            >
              <LottieView
                autoPlay
                style={styles.walletBtnImg}
                source={require("../../assets/services.json")}
              />
              <Text style={styles.walletBtnsTxt}>Services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletBtns}>
              <LottieView
                autoPlay
                style={[styles.walletBtnImg, { margin: 5 }]}
                source={require("../../assets/moneyGrow.json")}
              />
              <Text style={styles.walletBtnsTxt}>Coin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.walletSliderCon}>
            <SliderBox
              images={IMAGES}
              sliderBoxHeight={120}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={app_1}
              inactiveDotColor={bg_4}
              paginationBoxVerticalPadding={10}
              autoplay
              activeOpacity={0.5}
              circleLoop
              resizeMethod="resize"
              resizeMode={"cover"}
              paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10,
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)",
              }}
              ImageComponentStyle={{
                borderRadius: 10,
                width: "95%",
                marginTop: 5,
              }}
              imageLoadingColor="#2196F3"
            />
          </View>
          <View style={styles.paymentsCon}>
            <Text style={styles.paymentHeader}>Payment Methods</Text>
            <FlatList
              data={data}
              renderItem={RenderPayments}
              keyExtractor={(item) => item.phone}
              extraData={data}
              bounces={true}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
}
export default Wallet;