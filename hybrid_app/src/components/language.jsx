import { View,Text,TouchableOpacity} from "react-native";
import StylesCon from "../libs/Styles";
import { useContext } from "react";
import LocalContext from "../services/localization/localContext";
import { Image } from "react-native";


const LanguageChoose = () => {
    const {lang} = useContext(LocalContext);
    const Styles = StylesCon();
    return (
      <View style={Styles.langContainer}>
        <TouchableOpacity style={Styles.langCon}>
          <Image
            style={Styles.flagImg}
            source={require("../../assets/uk.jpg")}
          />
          <Text style={Styles.Txt1}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.langCon}>
          <Image
            style={Styles.flagImg}
            source={require("../../assets/myanmar.jpg")}
          />
          <Text style={Styles.Txt1}>Myanmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.langCon}>
          <Image
            style={Styles.flagImg}
            source={require("../../assets/china.jpg")}
          />
          <Text style={Styles.Txt1}>Chinese</Text>
        </TouchableOpacity>
      </View>
    );
};
export default LanguageChoose;