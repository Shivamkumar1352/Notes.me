import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Login from "../pages/login";
import Main from "../Layouts/Main";
import Notes from "../pages/Notes";

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/notes" element={<Main/>}>
        <Route index element={<Notes/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  