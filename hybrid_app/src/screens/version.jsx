import { View,Text} from "react-native";
import StylesCon from "../libs/Styles";

const Version = () => {
      const Styles = StylesCon();
  return <View style={Styles.Container}>
      <View style={Styles.versionTop}>

      </View>
      <View style={Styles.versionBt}>
        <Text style={Styles.versionTxt}>Version:  1.0.1 vMi</Text>

      </View>
  </View>;
};
export default Version;
