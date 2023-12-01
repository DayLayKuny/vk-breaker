import React, { useEffect, useState } from 'react';
import './YourComponent.css'; // Import your styles

const YourComponent = () => {
  const [txt, setTxt] = useState([
    "FORCE: XX0022. ENCYPT://000.222.2345",
    // ... (rest of your array)
  ]);

  const [msgState, setMsgState] = useState({
    background: "red",
    message: "Scanning",
    boxShadow: "0 0 30px red",
    displayConsole: "block",
  });

  useEffect(() => {
    const intervalID = setInterval(updateScreen, 200);

    return () => clearInterval(intervalID);
  }, []); // Run only once on mount

  const updateScreen = () => {
    setTxt((prevTxt) => [...prevTxt.slice(1), prevTxt[0]]);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      // Update state to change the message and styles
      setMsgState({
        background: "limegreen",
        message: "ACCESS GRANTED",
        boxShadow: "0 0 30px limegreen",
        displayConsole: "none",
      });
    }, 14000);

    return () => clearTimeout(timeoutID);
  }, []); // Run only once on mount

  return (
    <main className="cd__main">
      <div className="msg" style={msgState}>
        {msgState.message}
      </div>
      <div id="console" style={{ display: msgState.displayConsole }}>
        {txt.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </main>
  );
};

export default YourComponent;