import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <>
          <h1>Hello App.js</h1>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
         </ul>
       </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

