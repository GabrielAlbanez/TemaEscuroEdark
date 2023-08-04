import { View, Text, Button } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { TemaContext } from "../../common/Tema";

export default function Contatos({navigation}) {
  return (
    <TemaContext.Consumer>
      {({ tema, setTema, textColor, setTextColor }) => (
        <View
          style={{
            backgroundColor: tema,
            height: "100vh",
            widht: "100vh",
            flex: 1,
          }}
        >
          <Text style={{ color: textColor }}>Bem vindo a Contatos</Text>
          <Button
            title={"mudar Tema"}
            onPress={() => {
              tema === "black" ? setTema("white") : setTema("black");
              setTextColor(textColor === "white" ? "black" : "white");
            }}
          />
          <Button
            title={"Ir para Navigation"}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      )}
    </TemaContext.Consumer>
  );
}
