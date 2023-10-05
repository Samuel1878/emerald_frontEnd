import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles, { app_1, bg_3 } from "../libs/style";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { useEffect, useState, useRef, useCallback, useContext, useMemo } from "react";
import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import GlobalContext from "../services/global/globalContext";
import BetContext from "../services/bet/betContext";

const TwoD_Bet = ({ navigation }) => {
    const {money} = useContext(GlobalContext)
  const [firstDigit, setFirstDigit] = useState({ label: "0" });
  const [secondDigit, setSecondDigit] = useState({ label: "0" });
  const [digitPair, setDigitPair] = useState("");
  const [validAmount , setValidAmount] = useState(false)
  const [validPair, setValidPair] = useState(true);
  const [pairs, setPairs] = useState([]);
  const [amount, setAmount] = useState("");
  const animation = useRef(null);
  const { setBetDigits2D } = useContext(BetContext);
  const Digit = "1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9".split(",");
  const addPair = () => {
    validPair && pairs?.length <= 4 && setPairs((prev) => [...prev, digitPair]);
    setDigitPair("");
  };

  useEffect(()=> {
    if(amount>money){
        return setValidAmount(false)
    }else if(amount == "" || amount <= 100){
        return setValidAmount(false)
    }else{
        return setValidAmount(true);
    }
    
  },[amount])
  const Item = (item) => {
    return (
      <View>
        <Text style={{ color: app_1 }}>{item.label}</Text>
      </View>
    );
  };
  const Pairs = useCallback(() => {
    return (
      <>
        {pairs && pairs?.length>0 && pairs.map((e) => {
          return (
            <View style={styles.Pairs} key={e}>
              <Text style={styles.pairsTxt}>{e}</Text>
            </View>
          );
        })}
      </>
    );
  },[pairs])
  
  const selectFnc = () =>{
   pairs?.length <= 4 && setPairs((prev) => [...prev, firstDigit.label + secondDigit.label]);
  }
  const roundFnc = ()=>{
    firstDigit.label != secondDigit.label &&
      setPairs((prev) => [
        firstDigit.label + firstDigit.label,
        firstDigit.label + secondDigit.label,
        secondDigit.label + firstDigit.label,
        secondDigit.label + secondDigit.label,
      ]);
  }
  const clearFnc = () => {
    setPairs([])
  }
  const buyTicketsFnc = () =>{
    validAmount && setBetDigits2D(pairs.map((pair)=>({ pair, amount})) ) ;
    validAmount && navigation.navigate("Bet")
  };
  useEffect(() => {
    animation?.current.play();
  }, []);
  useEffect(() => {
    if (digitPair.length ===2) {
      setValidPair(true);
      return;
    }
    setValidPair(false);
  }, [digitPair]);

    useEffect(() => {

    }, [pairs]);
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.betContainer}>
        <View style={styles.ballanceContainer}>
          <View style={styles.walletBtn}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.walletImg}
              source={require("../../assets/wallet.json")}
            />
            <View style={styles.ballance}>
              <Text style={styles.ballanceH}>Balance (Ks)</Text>
              <Text style={styles.ballanceV}>{money}</Text>
            </View>
          </View>
          <View style={styles.timeCon}>
            <LottieView
              autoPlay
              ref={animation}
              style={styles.clockImg}
              source={require("../../assets/sandClock.json")}
            />
          </View>
        </View>
        <KeyboardAvoidingView style={styles.betInputBox}>
          <TextInput
            inputMode="numeric"
            value={amount}
            onChangeText={(e) => setAmount(e)}
            style={styles.amountInput}
            placeholder="Enter bet amount"
          />
          <View style={styles.digitInputContainer}>
            <TextInput
              inputMode="numeric"
              value={digitPair}
              onChangeText={(e) => setDigitPair(e)}
              style={styles.digitInput}
              placeholder="Enter 2 digits"
            />
            <TouchableOpacity onPress={addPair} style={styles.addBtn}>
              <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.digitPairsCon}>
          {pairs?.length !== 0 ? (
            <Pairs />
          ) : (
            <View style={styles.pairPreCon}>
              <Text style={styles.pairPreTxt}>Add or Select 2 digit pairs</Text>
            </View>
          )}
        </View>
        <View style={styles.wheelContainer}>
          <Entypo
            name="triangle-right"
            size={35}
            color={app_1}
            style={styles.leftNav}
          />
          <WheelPickerExpo
            height={200}
            width={100}
            initialSelectedIndex={9}
            backgroundColor="#2C3138"
            selectedStyle={{ borderColor: app_1, borderWidth: 5 }}
            items={Digit.map((digit) => ({ label: digit }))}
            renderItem={Item}
            onChange={({ item }) => setFirstDigit(item)}
          />
          <WheelPickerExpo
            height={200}
            width={100}
            initialSelectedIndex={9}
            backgroundColor="#2C3138"
            selectedStyle={styles.wheelpickerM}
            items={Digit.map((digit) => ({ label: digit }))}
            renderItem={Item}
            onChange={({ item }) => setSecondDigit(item)}
          />
          <Entypo
            name="triangle-left"
            size={35}
            color={app_1}
            style={styles.leftNav}
          />
        </View>
        <View style={styles.betBtnContainer}>
          <View style={styles.betBtnBox}>
            <TouchableOpacity 
                onPress={selectFnc}
                style={styles.selectBtn}>
              <Text style={styles.selectTxt}>Select</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={roundFnc} style={styles.selectBtn}>
              <Text style={styles.selectTxt}>Round</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.selectBtn}>
              <Text style={styles.selectTxt}>Dreams</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cleanBtnCon}>
            <TouchableOpacity 
                onPress={clearFnc}
                style={styles.cleanBtn}>
              <Text style={styles.cleanTxt}>Clear</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={buyTicketsFnc}
                style={styles.BuyTicket}>
              <Text style={styles.buyTxt}>Buy tickets</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default TwoD_Bet;
