import React, {useState} from 'react';
import Counter from "../common/components/Counter";
import SetCounter from "../common/components/SetCounter";

const App = () => {
    const [settings, setSettings] = useState(false)

    return (
        <div>
            <Counter/>
            <SetCounter/>
        </div>
    );
};

export default App;