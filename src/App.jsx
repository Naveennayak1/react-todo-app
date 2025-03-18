import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <ToDoList />
      </div>
    </>
  );
}

export default App;
