import { StyleSheet, Platform, Dimensions } from "react-native";
import { app_1, app_2, app_3, app_4, bg_1, bg_2, bg_3, bg_3b, bg_3c, text_1, text_1b, text_2, text_3 } from "./style";

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
  },
  ServiceContainer: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatAreaCon: {
    flex: 1,
    backgroundColor: bg_2,
  },
  chatBox: {
    marginTop: 10,
  },
  MessageItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  messageBOx: {
    backgroundColor: bg_3,
    paddingHorizontal: 10,
    padding: 5,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  messages: {
    fontSize: 18,
    color: app_1,
    fontFamily: "Roboto",
  },
  msgProfile: {
    width: 35,
    height: 35,
  },
  ServiceBox: {
    width: "100%",
    backgroundColor: app_1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
  },
  controls: {
    marginHorizontal: 5,
  },
  serviceTextInput: {
    height: 45,
    flex: 1,
    padding: 5,
    borderRadius: 15,
    backgroundColor: bg_2,
    color: app_4,
    fontSize: 18,
    marginHorizontal: 5,
  },
  sendBtnCon: {
    borderRadius: "100%",
  },
  SendBtn: {
    width: 60,
    height: 60,
  },
  ///Payment edit pages
  editInput: {
    padding: 20,
    backgroundColor: bg_3,
    marginVertical: 10,
    width: "90%",
    borderLeftColor: app_4,
    borderLeftWidth: 30,
    borderRadius: 5,
    fontSize: 18,
    color: app_1,
  },
  paySubmit: {
    backgroundColor: app_1,
    padding: 20,
    width: "90%",
    borderRadius: "50%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  payImg: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderRadius: 10,
  },
  payText: {
    fontSize: 18,
    fontWeight: "600",
    color: bg_2,
    fontFamily: "Roboto_Bold",
  },
  policyContainer: {
    width: "90%",
    flex: 1,
    marginVertical: 50,
    padding: 10,
    backgroundColor: bg_3,
    borderRadius: 20,
  },
  policyH: {
    fontSize: 18,
    fontWeight: "600",
    color: app_1,
    fontStyle: "italic",
    fontFamily: "Roboto_Bold",
  },
  footTxt: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 17,
    color: app_1,
    position: "absolute",
    bottom: 20,
    left: 10,
  },
  successTxt: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 17,
    color: app_1,
  },
  ///WINNER

  winnerH: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign: "center",
    marginVertical: 10,
    textDecorationLine: "underline",
    textDecorationColor: bg_3,
    textDecorationStyle: "solid",
  },
  topCon: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    borderBottomColor: app_1,
    borderBottomWidth: 2,
  },
  topGainer: {
    backgroundColor: bg_3,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 5,
    width: 300,
    flex: 1,
  },
  topImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  topGainerBox: {
    flex: 1,
    paddingVertical: 5,
  },
  tnameTxt: {
    fontSize: 17,
    fontFamily: "Roboto",
    color: text_1,
  },
  pnameTxt: {
    fontSize: 17,
    fontFamily: "Roboto",
    color: text_1,
  },
  mnameTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    color: text_1,
    fontWeight: "600",
  },
  NoCon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  No: {
    fontSize: 20,
    fontFamily: "Roboto_Bold",
    color: bg_2,
    fontWeight: "600",
  },
  ///Cash In Out
  cashServiceCon: {
    flex: 1,
    backgroundColor: bg_3,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  customerBtn: {
    width: 170,
    borderRadius: "100%",
    overflow: "hidden",
    marginHorizontal: 10,
    backgroundColor: app_1,
    flexDirection: "row",
    alignItems: "center",
  },
  customer: {
    width: 70,
    height: 70,
    marginRight: 10,
  },

  ///LEVEL PAGE ////////////////////////
  levelTop: {
    flex: 1,
    width: "100%",
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
  },
  levelTxt: {
    fontSize: 75,
    color: text_1b,
    fontFamily: "Roboto_Bold",
    fontWeight: "900",
  },
  levelXTxt: {
    fontSize: 250,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "900",
  },
  levelBottom: {
    flex: 2,
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
  },
  //VERSION ?
  versionTop: {
    flex: 1,
    backgroundColor: app_1,
    width: "100%",
  },
  versionBt: {
    flex: 2,
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
  },
  versionTxt: {
    fontSize: 20,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
  },
  //TERMS OF US
  termofusH: {
    fontSize: 19,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    textAlign: "center",
    margin: 10,
  },
  termofusP: {
    fontSize: 15,
    color: app_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "400",
    margin: 10,
  },
  termofusG: {
    height: 4,
    width: "90%",
    alignSelf: "center",
    backgroundColor: bg_3,
  },
  ////TRANSFER SCREEN
  TransferTopCon: {
    flex: 1,
    backgroundColor: app_1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tphoneCon: {
    padding: 15,
    borderRadius: 15,
    width: "90%",
    backgroundColor: bg_2,
  },
  tphoneH: {
    fontSize: 18,
    color: text_1,
    fontFamily: "Roboto_Bold",
    fontWeight: "400",
    margin: 10,
  },
  tphoneInput: {
    padding: 10,
    backgroundColor: bg_2,
    borderBottomColor: bg_3b,
    borderBottomWidth: 4,
    marginVertical: 10,
    color: text_1,
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
  },
  contactBookCon: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
  contactBook: {
    width: 60,
    height: 60,
  },
  TransferBtCon: {
    flex: 3,
    backgroundColor: bg_2,
    width: "100%",
    alignItems: "center",
  },
  NextBtn: {
    width: "90%",
    paddingVertical: 20,
    alignItems: "center",
    borderRadius: 5,
    color: text_1,
    backgroundColor: app_1,
    marginVertical: 25,
  },
  btnTxt: {
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1b,
  },
  recentTlist: {
    flex: 1,
    backgroundColor: bg_3,
    width: "90%",
    marginVertical: 35,
    borderRadius: 15,
    justifyContent: "flex-end",
  },
  //delete
  transDBtn: {
    width: "100%",
    paddingVertical: 20,
    borderRadius: 5,
    backgroundColor: bg_3b,
    alignItems: "center",
  },
  transDTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
  },
  ///ADDRESS BOOK
  searchCon: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: "100%",
    backgroundColor: bg_2,
    borderBottomColor: bg_3,
    borderbottomWidth: 4,
    marginVertical: 10,
  },
  searchInput: {
    height: 40,
    width: "100%",
    padding: 5,
    backgroundColor: bg_3,
    borderLeftColor: app_1,
    borderLeftWidth: 30,
    color: app_4,
    fontSize: 18,
    borderRadius: 5,
  },
  addressContainer: {
    flex: 1,
    backgroundColor: bg_2,
    width: "100%",
  },
  addressBookCon: {
    color: app_1,
    fontSize: 17,
  },
  addressBook: {
    width: "100%",
    padding: 10,
    backgroundColor: bg_3,
    flexDirection: "row",
  },
  addressProfile: {
    width: 50,
    height: 50,
  },
  addressD: {
    padding: 5,
    justifyContent: "center",
  },
  addressHCon: {
    width: "100%",
    padding: 10,
    backgroundColor: bg_2,
    flexDirection: "row",
  },
  addressHeader: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
  },
  addressN: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
  },
  ///TRANFERMAIN
  tranContainer: {
    flex: 1,
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
  },
  notfoundTran: {
    padding: 20,
    backgroundColor: bg_3,
    borderRadius: 10,
  },
  notfoundH: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
    textAlign: "center",
  },
  notfoundTxt: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
  },
  tranCon: {
    width: "90%",
    flex: 1,
    marginVertical: 15,
    backgroundColor: bg_3,
    borderRadius: 10,
  },
  ToCon: {
    width: "100%",
    padding: 20,
    backgroundColor: bg_3b,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  ToH: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
  },
  toName: {
    fontSize: 35,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
  },
  toNo: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_2,
  },
  amountCon: {
    padding: 10,
    width: "100%",
    justifyContent: "center",
  },
  amountH: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  amountInput: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderBottomColor: bg_3b,
    borderBottomWidth: 2,
    color: text_1,
    fontSize: 21,
    alignSelf: "center",
    marginVertical: 10,
  },
  pinCon: {
    width: "100%",
    padding: 5,
    backgroundColor: bg_2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 5,
    marginVertical: 10,
  },
  pinH: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  pinBtn: {
    padding: 10,
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  pin: {},
  transferBtn: {
    padding: 20,
    backgroundColor: app_1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    alignSelf: "center",
    marginVertical: 10,
  },
  transferTxt: {
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1b,
  },
  transferedCon: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: bg_1,
    position: "absolute",
    left: "50%",
    top: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  transferedTxt: {
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
  },
  ///TRANSACTION HISTORY
  TranHisCon: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  hisTopCon: {
    flexDirection: "row",
    height: 75,
    width: "100%",
    paddingVertical: 10,
  },
  hisTopBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bg_3,
  },
  RecHisCon: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TranHisH: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    marginVertical: 10,
  },
  hisItemCon: {
    backgroundColor: bg_3,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  hisItemImg: {
    width: 50,
    height: 50,
  },
  hisItem: {
    padding: 5,
  },
  hisH: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
  },
  hisDate: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
  },
  hisAmount: {
    fontSize: 21,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
  },
  ///Details
  detailTop: {
    marginVertical: 20,
  },
  detailTxt: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
    marginVertical: 5,
  },
  detailAmount: {
    fontSize: 40,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: text_2,
    marginVertical: 10,
  },
  details: {
    flexDirection: "row",

    justifyContent: "space-between",
    width: "95%",
    marginVertical: 5,
  },
  detailsTxt: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_2,
    marginVertical: 5,
  },
  line: {
    height: 2,
    width: "90%",
    backgroundColor: bg_3,
    marginVertical: 10,
  },
  ////PIN MANAGEMENT
  SetPinCon: {
    width: "90%",
    flex: 1,
    backgroundColor: bg_2,
    alignItems: "center",
  },
  setPinH: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_3,
    marginVertical: 20,
  },
  setPinInCon: {
    padding: 5,
    flexDirection: "row",
    marginVertical: 10,
  },
  setPinInput: {
    backgroundColor: bg_2,
    padding: 10,
    color: text_1,
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    borderBottomColor: bg_3b,
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  setPinBtn: {
    padding: 20,
    backgroundColor: app_1,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  changePinCon: {
    padding: 5,
    flexDirection: "row",
    marginVertical: 20,
  },
  setPinTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: text_1b,
  },

  ////INPUTSSS
  good: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_2,
  },
  warn: {
    fontSize: 13,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: text_3,
  },

  ////DEPOSIT SCREEN /////////////******************
  depositAmount: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: bg_3,
    marginVertical: 10,
    shadowColor: bg_1,
    shadowOffset: { x: 10, y: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  depositAmountInput: {
    width: "100%",
    padding: 10,
    color: text_1,
    borderRadius: 5,
    borderColor: app_1,
    borderWidth: 2,
    marginVertical: 10,
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
  },
  inputLabel: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_1,
  },
  alertTxt: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: "red",
    margin: 5,
    textAlign: "center",
  },
  depoH: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_4,
    marginVertical: 10,
  },
  recommedCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  recommedInputs: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderColor: app_1,
    borderWidth: 2,
    width: 110,
    margin: 5,
  },
  recommedTxt: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: app_4,
    marginVertical: 10,
  },

  depoServiceBtn: {
    backgroundColor: app_1,
    padding: 20,
    borderRadius: "50%",
    marginVertical: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  depoBtnTxt: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "500",
    color: text_1b,
  },
  depoTxt: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign: "center",
    margin: 5,
  },
  btnDeponContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  BtnDepoCon: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: bg_3,
    // width: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    // height:75
  },
  PayDepo: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  ///DepositLayout
  depositContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: bg_2,
  },
  depospitH: {
    fontSize: 19,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign: "center",
    margin: 5,
  },
  depositCon: {
    flex: 1,
    width: "90%",
    backgroundColor: bg_3,
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
  },
  depositRowCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },
  qrToggleBtn: {
    width: 150,
    backgroundColor: bg_3b,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  depositH1: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_2,
  },
  TranId: {
    backgroundColor: bg_2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    margin: 5,
    width: 100,
    alignSelf: "center",
  },
  tranIdTxt: {
    fontSize: 23,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_4,
    textAlign: "center",
  },

  MethodImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 10,
  },
  depositTxt: {
    fontSize: 15,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_2,
  },
  depositDataTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
  },
  depositNameTxt: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_2,
    marginVertical: 5,
  },
  depositBtnTxt: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1b,
  },
  depositBtnTxt1: {
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    color: text_1b,
  },
  depositPaymentsCon: {
    flex: 1,
  },
  depositCopyBtn: {
    flex: 0.5,
    backgroundColor: app_1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  depositUploadBtn: {
    width: "100%",
    backgroundColor: bg_3b,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },

  submitBtn: {
    marginVertical: 10,
    width: "90%",
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
  },
  qrCode: {
    width: 75,
    height: 75,
    margin: 10,
    borderRadius: 5,
  },
  serviceImg: {
    width: 50,
    height: 50,
  },
  ///Need Help FOOTER COM
  needHelpTxt: {
    fontSize: 17,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_2,

    textAlign: "center",
  },
  footerCon: {
    backgroundColor: bg_3,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    marginVertical: 5,
  },
  ////Payments
  payContainer: {
    flex: 1,
    backgroundColor: bg_2,
    padding: 10,
    justifyContent: "space-around",
  },
  addPayments: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: bg_2,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  payment: {
    padding: 10,
    margin: 5,
    backgroundColor: bg_3,
    borderRadius: 5,
  },
  payments: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  Txt: {
    fontSize: 14,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_3,
    marginVertical: 10,
    textAlign: "center",
  },
  ////WITHDRAW
  addPaymentsBtn: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: bg_3b,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  innerBtn: {
    padding: 5,
    backgroundColor: bg_3,
    borderRadius: "100%",
  },
  withdrawCon: {
    flex: 1,
    width: "90%",
    marginVertical: 10,
  },
  receivingCon: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:bg_3,
    marginVertical:15,
    borderRadius:5
  },
  withdrawInput: {
    padding: 20,
    width: "100%",
    backgroundColor: bg_3,
    borderRadius: 5,
    marginVertical: 10,
  },
  selectedData: {
    flex: 1,
    paddingHorizontal: 10,
  },
  Img: {
    width: 75,
    height: 75,
  },
  SubmitBtn: {
    marginVertical: 25,
    width: "100%",
    backgroundColor: app_1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  ////Common TXT
  Txt1: {
    fontSize: 13,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_1,
    marginVertical: 5,
  },
  Txt2: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_2,
    marginVertical: 5,
  },
  Txt3: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: text_3,
    marginVertical: 5,
    // textAlign: "center",
  },
  Txt4: {
    fontSize: 22,
    fontFamily: "Roboto_Bold",
    fontWeight: "700",
    color: text_3,
    marginVertical: 5,
    textAlign: "center",
  },
  Txt2M: {
    fontSize: 16,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    textAlign:"center"
  },
  Txt3M: {
    fontSize: 18,
    fontFamily: "Roboto_Bold",
    fontWeight: "600",
    color: app_1,
    
  },
});
export default Styles