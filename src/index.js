import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => <h1>Hello App.js</h1>;

function AppList() {
    return (
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
         </ul>
    );
}

function App() {
    return (
        <>
        <Header />
        <AppList />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

