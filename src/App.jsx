import React from "react";
import { Text } from "../src/components/text/Text.jsx";
import { phraseForComponent } from "./services/someText";
import { Heroes } from "../src/components/heroes/Heroes.jsx";

export const App = () => {
  return (
    <div>
      <h2>{phraseForComponent("Hello!")}</h2>
      <Text />
      <Heroes />
    </div>
  );
};
