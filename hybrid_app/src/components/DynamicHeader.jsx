import { Animated, Switch,Appearance } from "react-native"
import { Text, View } from "react-native"
import { useContext, useEffect } from "react";
import DataContext from "../services/data/dataContext";
import { useTranslation } from "react-i18next"; 
import LocalContext from "../services/localization/localContext";
import themeProvider from "../libs/theme";
import stylesCon from "../libs/style";


const Header_Max_Height = 250;
const Header_Min_Height = 170;
const DynamicHeader = ({navigation, animHeaderValue}) => {
    const {live2D} = useContext(DataContext);
    const {lang,setLang,theme,toggleTheme,useSystemTheme} = useContext(LocalContext);
    const colors = themeProvider().colors;
    const styles = stylesCon();
    const {t,i18n} = useTranslation();

    
     const animateHeaderBackgroundColor = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [colors.bg_1, colors.app_1],
       extrapolate: "clamp",
     });
     const animateHeaderHeight = animHeaderValue.interpolate({
       inputRange: [0, Header_Max_Height - Header_Min_Height],
       outputRange: [Header_Max_Height, Header_Min_Height],
       extrapolate: "clamp",
     });
     const toggleMode = () => {
        const newTheme = theme ==="dark" ? "light" : "dark" ;
        toggleTheme(newTheme);
     }

    return (
      <Animated.View
        style={[
          styles.homeBoardCon,
          {
            height: animateHeaderHeight,
            backgroundColor: animateHeaderBackgroundColor,
          },
        ]}
      >
        <View style={styles.userBoard}>
          <View style={styles.dataLeftCon}>
            <Text style={styles.liveNo}>{live2D?.liveResult || "35"}</Text>
            <Text style={styles.liveDate}>
              {live2D?.currentDate || "19/2/2023"}
            </Text>
            <Text style={styles.liveDate}>
              {live2D?.currentTime || "18:00 AM"}
            </Text>
          </View>
          <View style={styles.dataMidCon}></View>
          <View style={styles.dataRightCon}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={theme=="dark" ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleMode}
              value={theme}
            />
          </View>
        </View>
      </Animated.View>
    );
}
export default DynamicHeader