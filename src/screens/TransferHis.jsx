import { FlatList, Text, TouchableOpacity, View } from "react-native"
import Styles from "../libs/Styles";
import { useContext, useState } from "react";
import GlobalContext from "../services/global/globalContext";
import AnimatedLottieView from "lottie-react-native";
import { app_1, bg_3 } from "../libs/style";
import LottieView from "lottie-react-native";
import LocalContext from "../services/localization/localContext";
const TransferHis = ()=> {
    const {transactions,receive,navigation} = useContext(GlobalContext);
    const {setDetail} = useContext(LocalContext)
    const [isTran,setIsTran] = useState(true);
    const transferFnc = () => {
        !isTran && setIsTran(true)
    };
    const receiveFnc = () => {
        isTran && setIsTran(false);
    };
    const viewDetailFnc = (item)=>{
        setDetail(item);
        navigation.navigate("detail")
        
    }
    const renderItem = ({item}) => {
        return (
          <TouchableOpacity onPress={()=>viewDetailFnc(item)}>
            <View style={Styles.hisItemCon}>
              <LottieView
                style={Styles.hisItemImg}
                autoPlay
                source={require("../../assets/transfered.json")}
              />
              <View style={Styles.hisItem}>
                <Text style={Styles.hisH}>
                  {item.to ? "Transfer To" : "Received from"} {item.name}
                </Text>
                <Text style={Styles.hisDate}>{item.date}</Text>
              </View>
              <Text style={Styles.hisAmount}>
                {item.to ? " - " : " + "}
                {item.amount}
              </Text>
            </View>
          </TouchableOpacity>
        );
    }
    
    return (
      <View style={Styles.Container}>
        <Text style={Styles.TranHisH}>Transactions</Text>
        <View style={Styles.hisTopCon}>
          <TouchableOpacity
            style={[
              Styles.hisTopBtn,
              { backgroundColor: isTran ? app_1 : bg_3 },
            ]}
            onPress={transferFnc}
          >
            <Text>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              Styles.hisTopBtn,
              { backgroundColor: isTran ? bg_3 : app_1 },
            ]}
            onPress={receiveFnc}
          >
            <Text>Receive</Text>
          </TouchableOpacity>
        </View>
        {isTran ? (
          <View style={Styles.TranHisCon}>
            {transactions && (
              <FlatList
                keyExtractor={(item) => item?.id}
                renderItem={renderItem}
                data={transactions}
                extraData={transactions}
              />
            )}
          </View>
        ) : (
          <View style={Styles.RecHisCon}>
            {receive && (
              <FlatList
                keyExtractor={(item) => item?.id}
                renderItem={renderItem}
                extraData={receive}
                data={receive}
              />
            )}
          </View>
        )}
      </View>
    );
}
export default TransferHis;