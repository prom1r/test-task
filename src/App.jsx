import React from 'react';
import Text from "Components/Text.jsx";
import { someText } from "./services/someText";

const App = () => {
    return (
        <>
            <h2>{someText('Hello!')}</h2>
            <Text/>
        </>
    );
}

export default App;