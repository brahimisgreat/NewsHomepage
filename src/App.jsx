import "./App.css";
import Group10 from "./components/Group10/Group10";
import Group2 from "./components/Group2/Group2";
import Group3 from "./components/Group3/Group3";
import Group5 from "./components/Group5/Group5";

import { useState } from "react";
import MobileMenu from "./components/Mobile-Menu/Mobile-Menu";

function App() {
  const [toggleMenu, setTogglemenu] = useState(false)

  return (
    <div id="app-container">
      {toggleMenu && <MobileMenu setTogglemenu={setTogglemenu} toggleMenu={toggleMenu}/> }
      <Group2  setTogglemenu={setTogglemenu} toggleMenu={toggleMenu} />
      <Group3 />
      <Group5 />
      <Group10 />
    </div>
  );
}

export default App;
