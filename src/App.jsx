//import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Palindrome from "./routes/Palindrome.jsx";
import Bubble_sort from "./routes/Bubble_sort.jsx";
import Stack from "./routes/Stack.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/palindrome">Palindrome</Link>
            <Link to="/bubble_sort">Bubble Sort</Link>
            <Link to="/stack">Stack</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palindrome" element={<Palindrome />} />
          <Route path="/bubble_sort" element={<Bubble_sort />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
