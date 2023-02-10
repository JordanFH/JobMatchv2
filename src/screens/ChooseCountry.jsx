import React from "react";
import InputForm from "../components/InputForm";
import { useNavigation } from "@react-navigation/native";

const ChooseCountry = () => {
  const navigation = useNavigation();

  return (
    <InputForm
      fields={[
        { label: "País", value: "" },
        { label: "Ciudad", value: "" },
      ]}
      onSubmit={(values) => {
        navigation.navigate("ChooseUserName", {
          country: values[0],
          city: values[1],
        });
      }}
      questionText="Te damos la bienvenida,"
      requestText="Introduce los siguientes datos:"
    />
  );
};

export default ChooseCountry;
