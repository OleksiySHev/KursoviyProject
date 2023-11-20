import './App.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "../routes";
import React from "react";

function App() {
  return (
      <div className={"app"}>
        <Routes>
          {routes.map((x) => (
              <Route
                  key={x.path}
                  path={x.path}
                  element={<x.Component/>}
              />
          ))}
        </Routes>
      </div>
  );
}

export default App;
