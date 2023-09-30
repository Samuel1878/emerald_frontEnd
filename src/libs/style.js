import { StyleSheet,Platform,Dimensions } from "react-native";
const app_1 = "rgb(243, 186, 47)";
const app_2 = "rgb(231,187,65)";
const app_3 = "rgb(246,214,88)";
const app_4 ="rgb(251,206,41)";

const text_1 = "rgb(234,236,239)";
const text_2 = "rgb(200, 204, 210)";
const text_3 = "rgb(113,123,139)";
const text_1b = "rgb(31,35,40)";
const text_2b = "rgb(40,45,50)";

const bg_1 = "rgb(12,14,17)";
const bg_2 = "rgb(24,26,31)";
const bg_3 = "rgb(44,49,56)";
const bg_3b = "rgb(125,133,141)";
const bg_3c = "rgb(235,235,235)";
const bg_4 = "rgb(250,250,250)";
const bg_5 = "rgb(255,255,255)";
export { app_1, app_2, app_3, app_4, bg_1, bg_2, bg_3, bg_4, bg_5,bg_3b,bg_3c,text_1,text_1b,text_2,text_2b,text_3 };
const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: bg_1,
  },
  loaderContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: app_4,
    justifyContent: "center",
  },
  loader: {
    backgroundColor: bg_3,
    flex: 1,
  },
  ///Home
  homeBoardCon: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    padding: 10,
  },
  userBoard: {
    flex: 1,
    marginTop: 30,
    backgroundColor: app_1,
    height: 210,
    width: "90%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: app_1,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  liveNo: {
    fontSize: 75,
    fontWeight: "900",
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: { x: 2, y: 5 },
    color: bg_1,
    fontFamily: "Roboto_Bold",
  },
  liveDate: {
    fontSize: 12,
    color: bg_2,
    fontFamily: "Roboto",
  },
  homeDataCon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  //TwoDmini
  twoDmini: {
    flex: 1,
    width: "90%",
  },
  dataA: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: bg_3,
    borderRadius: 10,
    alignItems: "center",
  },
  dataHeader: {
    color: app_4,
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    marginVertical: 5,
  },
  dataACon: {
    borderTopColor: app_3,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dataH: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  dataV: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    color: text_1,
    fontWeight: "700",
  },
  line: {
    width: "90%",
    height: 2,
    flex: 1,
    backgroundColor: app_2,
    marginVertical: 5,
  },
  //Service Internet and Modern Data
  internetDataCon: {
    flex: 1,
    width: "90%",
  },
  interData: {
    flexDirection: "row",
    backgroundColor: bg_3,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowColor: bg_1,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  inter: {
    padding: 5,
    alignItems: "center",
  },
  interHeader: {
    color: app_4,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Roboto_Bold",
  },
  interH: {
    color: app_2,
    fontSize: 13,
    fontFamily: "Roboto",
  },
  interV: {
    color: text_1,
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  interData3D: {
    flexDirection: "row",
    backgroundColor: bg_3,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    shadowColor: bg_1,
    shadowOffset: { x: 5, y: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    width: "80%",
  },
  threeDTxt: {
    textAlign: "center",
    fontFamily: "Roboto_Bold",
    fontSize: 16,
    color: app_4,
    fontWeight: "600",
  },
  //Image
  imageSliderCon: {
    position: "absolute",
    bottom: 30,
    paddingVertical: 40,
    width: "100%",
    backgroundColor: bg_1,
  },
  //buttons
  btnBlurCon: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    position: "relative",
  },
  btnLabelTxt: {
    color: app_2,
    fontSize: 16,
  },

  regBtn: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: bg_1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  regBtnTxt: {
    fontSize: 18,
    color: app_4,
    fontWeight: "600",
  },
  logBtn: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: "80%",
    borderRadius: 10,
    backgroundColor: app_1,
  },
  logBtnTxt: {
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  twoD: {
    flex: 1,
    backgroundColor: bg_1,
  },
  threeD: {
    flex: 1,
    backgroundColor: bg_1,
  },
  //Wallet///////////////////////////////////
  wallet: {
    flex: 1,
    backgroundColor: bg_1,
  },
  walletMainCon: {
    flex: 1,
    backgroundColor: app_1,
    position: "relative",
  },
  walletMain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  scanBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  walletBtnTxt: {
    color: text_1b,
    fontWeight: "500",
    fontSize: 16,
  },
  ballanceCon: {
    width: "auto",
    height: 100,
    position: "absolute",
    bottom: "-25%",
    left: 15,
    right: 15,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: bg_3,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    shadowOffset: { x: 5, y: 5 },
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  ballanceHeader: {
    color: app_1,
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",

    marginLeft: 20,
  },
  ballanceD: {
    marginLeft: 20,
    margin: 5,
    color: app_1,
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  eye: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingVertical: 5,
  },
  ///wallet bottom part
  walletBottomCon: {
    flex: 3,
    alignItems: "center",
  },
  walletBtnCon: {
    width: "95%",
    height: 220,
    paddingTop: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  walletBtns: {
    backgroundColor: bg_3,
    width: 150,
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "10%",
  },
  walletBtnImg: {
    width: 60,
    height: 60,
  },
  scanLoti: {
    width: 60,
    height: 60,
  },
  walletBtnsTxt: {
    color: app_1,
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  walletSliderCon: {
    marginTop: 10,
    height: 150,
    width: "100%",
  },
  carouselCon: {
    flex: 1,
  },

  paymentsCon: {
    flex: 1,
    width: "95%",
  },
  paymentHeader: {
    color: app_4,
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  payments: {
    width: "100%",
    padding: 5,
    flexDirection: "row",
    backgroundColor: bg_3,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  paymentImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  payment: {
    marginHorizontal: 10,
    flex: 1,
  },
  paymentN: {
    color: app_1,
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  paymentP: {
    color: app_1,
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
  },
  paymentEd: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: app_1,
    borderRadius: 10,
  },
  paymentEdTxt: {
    color: text_1b,
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
  },

  ///Screens
  Container: {
    flex: 1,
    backgroundColor: bg_2,
  },
  topCon: {
    backgroundColor: app_1,
    flex: 1,
  },
  bottomCon: {
    flex: 3,
  },
  //Login Screen
  loginCon: {
    flex: 1,
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  loginBoxCon: {
    flex: 3,
    width: "90%",
    backgroundColor: "transparent",
    borderCurve: "continuous",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  loginHeader: {
    fontSize: 26,
    fontFamily: "Roboto_Bold",
    fontWeight: "900",
    marginVertical: 20,
    color: app_1,
    shadowColor: bg_1,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  inputName: {
    paddingVertical: 10,
    backgroundColor: bg_3,
    paddingLeft: 60,
    width: "90%",
    borderRadius: 10,
    fontSize: 19,
    fontFamily: "Roboto",
    color: app_1,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
    borderWidth: 2,
  },
  inputPwd: {
    paddingVertical: 10,
    backgroundColor: bg_3,
    paddingLeft: 60,
    width: "90%",
    borderRadius: 10,
    fontSize: 19,
    fontFamily: "Roboto",
    color: app_1,
    marginBottom: 50,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
    borderWidth: 2,
  },
  loginSubBtn: {
    width: "90%",
    padding: 10,
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
  },
  loginBtnTxt: {
    fontSize: 19,
    color: text_1b,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  loginLine: {
    backgroundColor: app_2,
    height: 2,
    width: "80%",
    marginTop: 25,
    marginBottom: 5,
  },
  loginRegTxt: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontStyle: "italic",
    color: bg_2,
  },
  //RegBtn in Login
  RegBtnCon: {
    width: "90%",
    padding: 10,
    backgroundColor: bg_3b,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    margin: 10,
    shadowColor: bg_3,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
  },
  RegBtnTxt: {
    color: app_1,
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  //img
  loginImgCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginImg: {
    height: 220,
    width: 200,
  },
  //Register Screen Container
  RegScreenCon: {
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
    justifyContent: "center",
  },
  RegBoxCon: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bg_2,
  },
  regNo: {
    backgroundColor: bg_3,
    borderRadius: 10,
    width: "90%",
    padding: 10,
    color: app_1,
    borderColor: app_1,
    borderWidth: 2,
    paddingLeft: 50,
    fontSize: 19,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
  },
  reg2FaBox: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  regInput2Fa: {
    width: "50%",
    padding: 10,
    backgroundColor: bg_3,
    color: app_1,
    fontSize: 19,
    borderColor: app_1,
    borderWidth: 2,
    paddingLeft: 50,
    borderRadius: 10,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  reg2FaBtn: {
    width: "40%",
    padding: 10,
    backgroundColor: bg_3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
  },
  reg2FaBtnTxt: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
  },
  regPwd: {
    width: "90%",
    padding: 10,
    backgroundColor: bg_3,
    color: app_1,
    fontSize: 19,
    borderColor: app_1,
    borderWidth: 2,
    paddingLeft: 50,
    borderRadius: 10,
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  regPwdTxt: {
    color: app_1,
    fontSize: 10,
    fontFamily: "Roboto",
  },
  subValTxt: {
    color: app_1,
    fontSize: 14,
    fontFamily: "Roboto",
    marginTop: 10,
  },
  regSubBtn: {
    marginTop: 20,
    backgroundColor: app_1,
    padding: 13,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    shadowColor: bg_1,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 20 },
  },
  rebSubTxt: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1b,
  },
  loginBtn: {
    backgroundColor: bg_3b,
    margin: 10,
    padding: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25%",
    shadowColor: bg_2,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
  },
  logRegTxt: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
  },
  RegLogTxt: {
    fontSize: 14,
    fontStyle: "italic",
    fontFamily: "Roboto",
    color: app_1,
  },
  //label
  inputLabel: {
    margin: 10,
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    paddingLeft: 20,
    alignSelf: "flex-start",
    color: app_1,
  },
  //Service Container
  servicesCon: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  serviceImg: {
    width: 100,
    height: 100,
  },
  serviceUs: {
    width: 120,
    height: 120,
  },
  termofus: {
    position: "absolute",
    bottom: -10,
    fontSize: 13,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign: "center",
    left: "10%",
    right: "10%",
  },
  /// Service BTN
  serviceBtnCon: {
    position: "absolute",
    right: 20,
    bottom: 40,
    borderRadius: "50%",
    padding: 10,
    zIndex: 9,
    backgroundColor: app_1,
  },
  ///More
  topmeCon: {
    flex: 1,
    backgroundColor: app_1,
    padding: 10,
  },
  userProfileCon: {
    width: "90%",
    height: "100%",
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  userProfile: {
    width: 100,
    height: 100,
    borderColor: bg_3c,
    borderWidth: 2,
    borderRadius: 50,
    margin: 5,
  },

  userDataBox: {
    margin: 10,
    flex: 1,
  },
  userNameTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    width: "100%",
    color: text_1b,
  },
  userDataTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    padding: 5,
    color: text_2b,
  },
  bottomMeCon: {
    flex: 4,
  },
  moreItemCon: {
    flexDirection: "row",
    backgroundColor: bg_3,
    shadowColor: bg_1,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { x: 10, y: 10 },
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
  },
  moreItemImg: {
    width: 60,
    height: 60,
  },
  moreItemTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    padding: 5,
    color: app_1,
  },

  //Me Screen
  meTop: {
    flex: 1,
    backgroundColor: app_1,
  },
  meProfile: {
    height: 200,
    width: 200,
    backgroundColor: app_1,
    position: "absolute",
    alignSelf: "center",
    top: -100,
    zIndex: 1,
    borderRadius: "100%",
    // overflow: "hidden",
  },
  meImg: {
    width: "100%",
    height: "100%",
  },
  meBottom: {
    flex: 2,
    backgroundColor: bg_2,
  },
  meNameChangeCon: {
    flex: 1,
    alignItems: "center",
  },
  nameChangeInput: {
    padding: 15,
    backgroundColor: bg_3,
    width: "80%",
    color: app_1,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 120,
    borderLeftColor: app_1,
    borderLeftWidth: 20,
    shadowColor: bg_1,
    shadowOpacity: 0.9,
    shadowOffset: { x: 10, y: 20 },
    shadowRadius: 10,
  },
  mePhone: {
    width: "80%",
    padding: 15,
    backgroundColor: bg_3,
    borderRadius: 10,
    marginVertical: 20,
    borderLeftColor: app_1,
    borderLeftWidth: 20,
    shadowColor: bg_1,
    shadowOpacity: 0.9,
    shadowOffset: { x: 10, y: 20 },
    shadowRadius: 10,
  },
  meTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 19,
    fontWeight: "600",
    color: app_1,
  },
  nameChangeBtn: {
    backgroundColor: app_4,
    padding: 15,
    width: "50%",
    borderRadius: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: bg_1,
    shadowOpacity: 0.9,
    shadowOffset: { x: 10, y: 20 },
    shadowRadius: 10,
  },
  saveTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 19,
    fontWeight: "600",
    color: text_1b,
  },
  ///Pwd Change Screen
  PwdContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    // justifyContent:"center",
    backgroundColor: bg_2,
  },
  pwdInputCon: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
  },
  pwdChangeInput: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: bg_3,
    borderRadius: 10,
    color: text_1,
    fontSize: 18,
    borderLeftColor: app_1,
    borderLeftWidth: 30,
  },
  pwdChangeBtn: {
    backgroundColor: app_1,
    borderRadius: "25%",
    padding: 10,
    width: "90%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Eye1: {
    position: "absolute",
    right: 20,
  },
  pwdChangetxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: bg_1,
  },
  ///Change Profile Btn
  changeProfileBtn: {
    position: "absolute",
    bottom: 0,
    right: 0,

    backgroundColor: bg_3b,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraImg: {
    width: 50,
    height: 50,
  },
  ///3D UIX
  threeDCon: {
    flex: 1,
    backgroundColor: bg_2,
  },
  threeDdataCon: {
    backgroundColor: bg_2,
    flex: 1,
  },
  _3d_betBtn: {
    position: "absolute",
    bottom: 20,
    left: "25%",
    right: "25%",
    borderRadius: "25%",
    backgroundColor: app_4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    shadowColor: bg_1,
    shadowOpacity: 0.9,
    shadowOffset: { x: 10, y: 20 },
    shadowRadius: 10,
  },
  _3d_betBtnTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 21,
    fontWeight: "600",
    color: text_1b,
  },
  threeDItem: {
    backgroundColor: bg_3,
    height: 90,
    width: "80%",
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  threeDheaderCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  threeDvalueCon: {
    alignItems: "center",
  },
  //TOp
  threeDTopCon: {
    height: 170,
  },
  //ServerTime
  serverTimeCon: {
    paddingTop: 35,
    flexDirection: "row",
    backgroundColor: app_1,
    alignItems: "center",
  },
  serverTime: {
    color: text_1b,
    padding: 10,
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  threeDBtnBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  ////History BTNs
  btnTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  HistoryBtn: {
    padding: 10,
    paddingHorizontal: 25,
    backgroundColor: app_4,
    borderRadius: "25%",
  },
  WinnerBtn: {
    padding: 10,
    paddingHorizontal: 25,
    backgroundColor: app_4,
    borderRadius: "25%",
  },
  AnalysisBtn: {
    paddingHorizontal: 25,
    padding: 10,
    backgroundColor: app_4,
    borderRadius: "25%",
  },

  //2D Screen
  top2DCon: {
    flex: 2,
    backgroundColor: bg_2,
  },
  _2dBtnCon: {
    paddingTop: 30,
    height: 120,
    flexDirection: "row",
    backgroundColor: app_1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  _2dBtn: {
    backgroundColor: bg_2,
    paddingHorizontal: 30,
    borderRadius: "25%",
    padding: 10,
    shadowColor: bg_2,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  _2dBtnTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 19,
    fontWeight: "600",
    color: app_1,
  },
  _2d_liveCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  _2d_liveNo: {
    fontSize: 70,
    fontFamily: "Roboto_Bold",
    fontWeight: "900",
    color: app_1,
  },
  _2d_live: {
    fontSize: 12,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  //bottom
  bottom2DCon: {
    flex: 4,
    backgroundColor: bg_2,
  },
  _2d_dataCon: {
    flex: 1,
  },
  _2d_itemCon: {
    backgroundColor: bg_3,
    margin: 20,
    height: 420,
    borderRadius: 10,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
  _2d_itemTop: {
    backgroundColor: app_1,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  _2d_Header: {
    fontFamily: "Roboto_Bold",
    fontSize: 17,
    fontWeight: "600",
    color: text_1b,
  },
  _2d_itemBottom: {
    flex: 6,
    backgroundColor: bg_3,
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 10,
  },
  _2d_H: {
    margin: 10,
    fontSize: 22,
    color: text_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  _2d_line: {
    height: 2,
    width: "90%",
    backgroundColor: bg_3b,
  },
  _2d_bt_af: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    borderBottomColor: bg_2,
    borderBottomWidth: 5,
  },
  _2d_bt_ev: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    width: "100%",
    borderBlockColor: bg_2,
    borderBottomWidth: 5,
  },
  _2d_Set: {
    alignItems: "center",
    justifyContent: "center",
  },
  _2d_Value: {
    alignItems: "center",
    justifyContent: "center",
  },
  _2d_Result: {
    alignItems: "center",
    justifyContent: "center",
  },
  _2d_h: {
    fontSize: 14,
    color: text_2,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    padding: 5,
  },
  _2d_d: {
    fontSize: 18,
    color: app_4,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  _2d_interCon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    borderBottomColor: bg_2,
    borderBottomWidth: 4,
  },
  _2d_interCon2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    borderBottomColor: app_1,
    borderBottomWidth: 4,
  },
  _2d_interH: {
    color: text_1,
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  _2d_interBox: {
    alignItems: "center",
    padding: 5,
  },
  _2d_interh: {
    fontSize: 12,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    color: text_2,
  },
  _2d_interD: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  //bet Btn
  bet2DBtn: {
    position: "absolute",
    bottom: 30,
    left: "20%",
    right: "20%",
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: "50%",
    borderTopColor: app_1,
    borderTopWidth: 1,
    borderColor: app_1,
    borderWidth: 2,
  },
  bet2DBtnTxt: {
    fontSize: 19,
    color: app_4,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  ////bet ROUTE
  _betContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bg_2,
  },
  _betFormBox: {
    width: "90%",
    backgroundColor: bg_3,
    height: "75%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  _betForm: {
    flexDirection: "row",
    padding: 10,
    width: "90%",
    backgroundColor: bg_2,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  pairInput: {
    backgroundColor: bg_3,
    color: app_1,
    flex: 1.5,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  _betPairTxt: {
    fontSize: 19,
    color: app_4,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  changeAmountBtn: {
    backgroundColor: app_2,
    padding: 10,
    borderRadius: 10,
    flex: 0.5,
  },
  _confirmOrderBtn: {
    width: "100%",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: app_1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  ///calender lotttie
  calenderCon: {
    position: "absolute",
    width: 55,
    height: 55,
    left: 25,
    top: 10,
  },
  calender: {
    flex: 1,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  _2d_filterCon: {
    backgroundColor: "transparent",
    width: 110,
    flex: 1,
    position: "absolute",
    top: -25,
    right: 0,
  },
  _2d_filter: {
    flex: 1,
    shadowColor: bg_3,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 1,
    shadowRadius: 10,

    backgroundColor: "transparent",
  },
  _2d_filterItem: {
    fontSize: 13,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
  },
  filter: {
    flex: 1,
    position: "absolute",
    left: -5,
    top: "45%",
    bottom: "45%",
  },
  //bet button
  betBtnCon: {
    width: 150,
    height: 150,
    backgroundColor: bg_2,
    position: "absolute",
    top: "20%",
    left: "-5%",
  },
  betnow: {
    flex: 1,
  },
  close: {
    flex: 1,
  },

  ////3D Bet Screen
  betContainer: {
    flex: 1,
    backgroundColor: bg_2,
    justifyContent: "center",
  },
  wheelContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  wheelpicker: {
    borderColor: app_1,
    borderWidth: 5,
  },
  wheelpickerM: {
    borderColor: app_2,
    borderWidth: 5,
  },

  //
  betBtnContainer: {
    flex: 1,
    backgroundColor: bg_2,
  },
  betBtnBox: {
    height: 100,
    backgroundColor: bg_2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cleanBtnCon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cleanBtn: {
    backgroundColor: bg_3b,
    padding: 20,
    width: "25%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cleanTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  BuyTicket: {
    backgroundColor: app_4,
    padding: 20,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  buyTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  selectBtn: {
    padding: 12,
    paddingHorizontal: 30,
    backgroundColor: app_4,
    borderRadius: "25%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  selectTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  betInputBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  digitInputContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  digitInput: {
    width: "65%",
    padding: 20,
    backgroundColor: bg_3,
    borderLeftColor: app_1,
    borderLeftWidth: 30,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    color: app_1,
  },
  addBtn: {
    marginVertical: 10,
    width: "30%",
    backgroundColor: app_4,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: text_1b,
  },
  amountInput: {
    width: "80%",
    padding: 20,
    backgroundColor: bg_3,
    borderLeftColor: app_1,
    borderLeftWidth: 30,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    color: app_1,
  },
  digitPairsCon: {
    flex: 0.5,
    backgroundColor: bg_2,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "center",
    borderBottomColor: app_2,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: app_2,
    shadowColor: app_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  Pairs: {
    padding: 18,
    backgroundColor: app_1,
    borderRadius: "100%",
    marginHorizontal: 10,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  pairsTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 15,
    fontWeight: "600",
    color: text_1b,
  },
  pairPreCon: {
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
  },
  pairPreTxt: {
    fontFamily: "Roboto_Bold",
    fontSize: 18,
    fontWeight: "600",
    color: app_2,
  },

  ///ballanceContainer
  ballanceContainer: {
    flex: 0.5,
    backgroundColor: bg_2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  walletBtn: {
    width: "45%",
    height: 75,
    backgroundColor: bg_3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopEndRadius: "25%",
    borderBottomColor: app_2,
    borderBottomWidth: 2,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  ballance: {
    width: "100%",
  },
  ballanceH: {
    fontFamily: "Roboto_Bold",
    fontSize: 14,
    color: app_1,
    fontWeight: "600",
  },
  ballanceV: {
    fontFamily: "Roboto_Bold",
    fontSize: 17,
    color: app_4,
    fontWeight: "600",
    margin: 3,
  },
  walletImg: {
    width: 70,
    height: "100%",
  },
  timeCon: {
    width: "30%",
    height: 75,
    backgroundColor: bg_3,
    alignItems: "flex-start",
    borderBottomLeftRadius: "25%",
  },
  clockImg: {
    width: 60,
    height: 60,
  },

  //HISTORY 2D
  History2D: {
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
  },
  HistContainer: {
    flex: 1,
    width: 320,
  },
  hisItem: {
    width: "100%",
    padding: 10,
    backgroundColor: bg_3,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hisTxt: {
    fontSize: 18,
    color: app_1,
  },

  ///TWO_D ANALYSIS
  TwoD_AnalysisCon: {
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: app_1,
    height: 100,
  },
  btnNumber: {
    backgroundColor: bg_2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderTopLeftRadius: "50%",
    margin: 5,
    borderBottomRightRadius: 5,
  },
  btnChart: {
    padding: 10,
    backgroundColor: bg_2,
    flex: 1,
    borderTopRightRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderBottomLeftRadius: 5,
  },
  numberTxt: {
    fontSize: 16,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
  },
  ///Numbers
  analHeader: {
    width: "95%",
    backgroundColor: app_4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: app_1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomWidth: 6,
  },
  analCon: {
    padding: 5,
  },
  analSelectedTxt: {
    fontSize: 16,
    color: app_2,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
  },
  analHtxt: {
    fontSize: 15,
    color: bg_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  _filter: {
    flex: 1,
    shadowColor: app_4,
    shadowOffset: { x: 10, y: 20 },
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: "transparent",
  },
  _filterItem: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: bg_1,
  },
  /////
  DyCon: {
    width: "95%",
    height: 50,
    margin: 10,
  },
  ////DynamicNumbers/
  DynamicNumbers: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
  DyNumbers: {
    padding: 10,
    borderRadius: "100%",
    backgroundColor: app_2,
    justifyContent: "center",
  },
  Numbers: {
    fontSize: 16,
    color: bg_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },

  //DATA
  analDataContainer: {
    width: "95%",
  },

  analItemCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: bg_3,
    marginVertical: 10,
    borderRadius: 10,
    // paddingVertical: 10,
  },
  analItemBox: {
    paddingHorizontal: 10,
    borderLeftWidth: 2,
    borderLeftColor: bg_2,
    paddingVertical: 10,
  },
  analAf: {
    fontSize: 16,
    color: text_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  analItemBox1: {},
  analItemTxt: {
    fontSize: 15,
    color: text_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  analItemTxtd: {
    fontSize: 15,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
});
export default styles;
