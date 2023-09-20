import {  View,Animated} from "react-native";
import styles from "../libs/style";
import HomeItems from "../components/homeItems";
import DynamicHeader from "../components/DynamicHeader";
import { useContext, useRef } from "react";
import { ScrollView } from "react-native";
import AuthContext from "../services/auth/authContext";
import restoreUserData from "../hooks/fetchUserData";
import { _2d_URL } from "../hooks/config";
const Home = ({navigation}) => {
    const {userToken} = useContext(AuthContext);
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    restoreUserData(userToken);

    const data = [
        {
            id:1,
            title:"TwoDmini"
        },
         {
            id:2,
            title:"line"
        },
         {
            id:3,
            title:"internet"
        },
         {
            id:4,
            title:"imageSlider"
        },
         {
            id:5,
            title:"Five"
        },
    ];
    
  
    return(
        <View style={styles.home}>
            <DynamicHeader animHeaderValue={scrollOffsetY} navigation={navigation}/>
           <ScrollView
            contentContainerStyle={styles.homeDataCon}
            bounces={false}
            scrollEventThrottle={4}
            onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
          {useNativeDriver: false}
        )}>
            {
                data.map((item,index)=>{
                    return(<HomeItems item={item} key={index}/>)
                })
            }
           </ScrollView>
        </View>
    )
};
export default Home;