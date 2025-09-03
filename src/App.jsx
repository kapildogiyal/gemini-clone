import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/main";
function App() {
  return (
    <div className="flex w-screen">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
