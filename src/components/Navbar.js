import React from "react";

export default function ({
  reg,
  setReg,
  val,
  setVal,
  loginval,
  setLoginval,
  log,
  setLog,
}) {
  return (
    <header>
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-title">
          <h4>Refood</h4>
          <h6>Waste to Wealth</h6>
        </div>
      </div>
      <nav>
        <ul>
          <li
            onClick={() => {
              setReg(false);
              setLog(false);
              setVal(0);
              setLoginval(0);
            }}
          >
            Home
          </li>
          <li>About us</li>
          <li>Contact us</li>
          <span></span>
        </ul>
      </nav>
      <div className="register-login">
        <div className="dropdown">
          <button className="dropbtn register-btn">Registration</button>
          <div className="dropdown-content">
            <a
              href="#"
              onClick={() => {
                setReg(true);
                setVal(1);
                setLog(false);
              }}
            >
              Farmer Registration
            </a>
            <a
              href="#"
              onClick={() => {
                setReg(true);
                setVal(2);
                setLog(false);
              }}
            >
              Industry Registration
            </a>
            <a
              href="#"
              onClick={() => {
                setReg(true);
                setVal(3);
                setLog(false);
              }}
            >
              Restaurant Registration
            </a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn hello">Login</button>
          <div className="dropdown-content">
            <a
              href="#"
              onClick={() => {
                setLoginval(1);
                setLog(true);
                setReg(false);
              }}
            >
              Farmer Login
            </a>
            <a
              href="#"
              onClick={() => {
                setLoginval(2);
                setLog(true);
                setReg(false);
              }}
            >
              Industry Login
            </a>
            <a
              href="#"
              onClick={() => {
                setLoginval(3);
                setLog(true);
                setReg(false);
              }}
            >
              Restaurant Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
