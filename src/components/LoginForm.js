import React from "react";

export default function LoginForm({ loginval, setLog, setReg, val, setVal }) {
  const url1 =
    "https://img.freepik.com/free-photo/farmer-working-outdoors-harvesting-wheat-sunset-generated-by-ai_188544-21578.jpg";
  const url2 =
    "https://i0.wp.com/sitn.hms.harvard.edu/wp-content/uploads/2018/04/DanUtter_JordanWilkerson_CoverPhoto.jpg?resize=1500%2C768&ssl=1";
  const url3 =
    "https://totalfood.com/wp-content/uploads/2023/05/food-trends-1.webp";

  const arr = [url1, url2, url3];
  return (
    <div
      className="login-form"
      style={{ backgroundImage: `url(${arr[loginval - 1]})` }}
    >
      <h2>
        {loginval === 1 && "Farmer"} {loginval === 2 && "Industry"}{" "}
        {loginval === 3 && "Restaurant"} Login
      </h2>
      <form className="form">
        <div className="details">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="details">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="btn-group">
          <button className="login-form-btn" type="submit">
            Login
          </button>
          <button
            onClick={() => {
              setLog(false);
              setReg(true);
              setVal(1);
            }}
            className="login-form-btn backto-register"
          >
            For Registration
          </button>
        </div>
      </form>
    </div>
  );
}
