import React from "react";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return <Screen>
      <ListingEditScreen />
  </Screen>;
}


