import { useState } from "react";
import Content from "./components/Content";
import FarmerRegistration from "./components/FarmerRegistration";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";

function App() {
  const [reg, setReg] = useState(false);
  const [val, setVal] = useState(0);
  const [log, setLog] = useState(false);
  const [loginval, setLoginval] = useState(0);
  return (
    <div className="App">
      <Navbar
        reg={reg}
        setReg={setReg}
        val={val}
        setVal={setVal}
        loginval={loginval}
        setLoginval={setLoginval}
        log={log}
        setLog={setLog}
      />
      {reg === false && log === false && <Content />}
      {reg && log === false && <FarmerRegistration val={val} />}

      {log && reg === false && (
        <LoginForm loginval={loginval} setLog={setLog} setReg={setReg} setVal={setVal} val={val} />
      )}
      <Footer />
    </div>
  );
}

export default App;
