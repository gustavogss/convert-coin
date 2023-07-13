import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { Picker } from "../../components/Picker";
import api from "../../services/api";

export function Home() {
  const [moeda, setMoeda] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaselecionada, setMoedaSelecionada] = useState(null);
  const [moedaValor, setMoedaValor] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get("all");

      let arrayMoedas = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        });
      });

      setMoeda(arrayMoedas);
      setLoading(false);
    }
    loadMoedas();
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <ActivityIndicator color="#FFF" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de moedas</Text>
        <View style={styles.areaMoeda}>
          <Text style={styles.text}>Selecione uma moeda</Text>
          <Picker moedas={moeda} />
        </View>
        <View style={styles.areaValor}>
          <Text style={styles.text}>
            Digite um valor para converter em (R$)
          </Text>
          <TextInput
            keyboardType="numeric"
            placeholder="150"
            style={styles.inputValor}
            onChangeText={setMoedaValor}
          />
        </View>
        <TouchableOpacity style={styles.btnConverter}>
          <Text style={styles.textConverter}>Converter</Text>
        </TouchableOpacity>
        <View style={styles.areaResultado}>
          <Text style={styles.valorConvertido}>1 USD</Text>
          <Text style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}>
            Corresponde a:
          </Text>
          <Text style={styles.valorConvertido}>4,819</Text>
        </View>
      </View>
    );
  }
}
