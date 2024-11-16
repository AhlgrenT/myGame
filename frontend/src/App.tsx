import React, { useState } from 'react';
import './App.css';
import MovableCircle from './MovableCircle';

function App() {
    const [responseMessage, setResponseMessage] = useState<string>("");

    // Function to handle button click
    const handleButtonClick = async () => {
        try {
            const response = await fetch("http://localhost:8080/hello", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.ok) {
                const message = await response.text();
                setResponseMessage(message); // Set the response message to display it
            } else {
                setResponseMessage("Error: Could not reach backend.");
            }
        } catch (error) {
            console.error("Error connecting to backend:", error);
            setResponseMessage("Error: Unable to connect to backend.");
        }
    };

    return (
        <div className="App">
            <h1>Test Backend Connection</h1>
            <MovableCircle />
            <button onClick={handleButtonClick}>Trigger Backend</button>
            {responseMessage && <p>Response from backend: {responseMessage}</p>}
        </div>
    );
}

export default App;

