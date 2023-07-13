import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
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
  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

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

  async function handleConverter() {
    if (moedaselecionada === null || moedaValor === 0){
        alert('Por favor selecione uma moeda')
        return;
    }  
    const response = await api.get(`all/${moedaselecionada}-BRL`)
    let resultado = (response.data[moedaselecionada].ask * parseFloat(moedaValor))
    setValorConvertido(`R$ ${resultado.toFixed(2)}`)    
    setValorMoeda(moedaValor)  
    Keyboard.dismiss()  
  }

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
          <Picker moedas={moeda} onChange={setMoedaSelecionada} />
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
        <TouchableOpacity style={styles.btnConverter} onPress={handleConverter}>
          <Text style={styles.textConverter}>Converter</Text>
        </TouchableOpacity>
        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>
                {valorMoeda} {moedaselecionada}
            </Text>
            <Text
              style={[styles.valorConvertido, { fontSize: 18, margin: 10 }]}
            >
              Corresponde a:
            </Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
}
