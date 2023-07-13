import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#212121",
    paddingTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "#eee",
    padding: 10,
  },
  areaMoeda: {
    backgroundColor: "#e6e1e1",
    width: "90%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 10,
    marginTop: 10,
    marginBottom: 2,
  },
  text: {
    color: "#353535",
    fontSize: 18,
    padding: 15,
    fontWeight: "500",
  },
  areaValor: {
    backgroundColor: "#e6e1e1",
    width: "90%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  inputValor: {
    width: "100%",
    padding: 10,
    height: 45,
    fontSize: 20,
    color: "#121212",
    marginTop: 8,
  },
  btnConverter: {
    backgroundColor: "#da302b",
    width: "90%",
    height: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textConverter: {
    fontSize: 18,
    color: "#eee",
    fontWeight: "bold",
  },
  areaResultado: {
    width: "90%",
    marginTop: 20,
    padding: 20,   
    backgroundColor: "#e6e1e1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  valorConvertido: {
    color: "#212121",
    fontSize: 25,
  },
});
export default styles;
