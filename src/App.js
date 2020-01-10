import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
// import "./App.css";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,
        backgroundColor: '#ffaa0a'
      }}
    >
      <div>
        <Button primary>Test</Button>
      </div>
    </div>
  );
}

export default App;
