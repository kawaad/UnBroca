import React, {useState} from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import { ColorPalette } from "../../constants";
import {StyledTextInput} from "../forms";
import {BigButton} from "../buttons";

interface RegisterFormProps {
  navigation: any;
  setRenderLogin: any;
}

export function RegisterForm({ navigation, setRenderLogin }: RegisterFormProps) {
  const [Nome,     setNome    ] = useState<string>();
  const [Email,    setEmail   ] = useState<string>();
  const [Telefone, setTelefone] = useState<string>();
  const [Senha,    setSenha   ] = useState<string>();


  return (
    <View>
        <StyledTextInput textStyle={styles.labelText}
        title="Nome"
        placeholder="Informe seu nome completo"
      />
      <StyledTextInput textStyle={styles.labelText}
        title="E-mail"
        placeholder="Informe seu endereço de e-mail"
      />
      <StyledTextInput textStyle={styles.labelText}
        title="Telefone"
        placeholder="Informe seu telefone com DDD"
      />
      <StyledTextInput textStyle={styles.labelText}
        title="Senha"
        placeholder="Informe sua senha"
      inputProps={{secureTextEntry:true}}
      />
      <StyledTextInput textStyle={styles.labelText}
        title="Confirme a sua senha"
        placeholder="Informe sua senha"
        inputProps={{secureTextEntry:true}}
      />
      <View style={{ flexDirection: "row" }}>
        <BigButton
          style={{ flex: 1 }}
          text="SEREI CLIENTE"
          onPress={() => setRenderLogin(true)}
        />
        <BigButton
          style={{ flex: 1 }}
          text="SOU VENDEDOR"
          onPress={() => setRenderLogin(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    width: "40%", textAlign: "center",
    color: "black", fontSize: 18, fontStyle: "normal",
    fontWeight: "400", borderBottomWidth: 1, borderColor: ColorPalette.Primary
  },
  labelText: {
    color: "black", fontSize: 15, fontStyle: "normal",
    fontWeight: "400"
  },
});
