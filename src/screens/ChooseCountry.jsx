import React from "react";
import InputForm from "../components/InputForm";

const ChooseCountry = ({ navigation }) => {
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
