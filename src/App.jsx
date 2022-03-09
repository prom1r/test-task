import React from 'react';
// import { Text } from "Components/Text.jsx";
import {Text} from "./components/Text.jsx"
import { phraseForComponent } from "./services/someText";

export const App = () => {
    return (
        <div>
            <h2>{phraseForComponent('Hello!')}</h2>
            <Text/>
        </div>
    );
}

