import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StackMain from "./StackMain/index";

const Router = () => {
  return (
    <NavigationContainer>
      <StackMain />
    </NavigationContainer>
  );
};

export default Router;
